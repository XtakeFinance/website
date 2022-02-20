import React from "react";
import {Button} from "antd";
import {ethers} from "ethers";
import * as actions from "../../Actions/transactionActions";
import {unstakeAlert} from "../../Actions/transactionActions";
import {
    liquidStakingContractAddress,
    NO_OF_BLOCK_CONFIRMATIONS,
    stkAVAXContractABI,
    stkAVAXContractAddress
} from "../../AppConstants";
import {MIN_UNSTAKE_AMOUNT, STK_AVAX_BALANCE, STK_AVAX_INPUT, UNSTAKE_TYPE} from "../../Reducers";
import {useDispatch, useSelector} from "react-redux";
import Moralis from "moralis";
import {setBalance, setMetamaskAlert} from "../../Actions/walletActions";
import {
    INSTANT_UNSTAKE, METAMASK_NOT_INSTALLED,
    MIN_STAKE_AMOUNT_ALLOWED,
    MIN_UNSTAKE_AMOUNT_ALLOWED,
    UNSTAKED
} from "../../Utils/messageUtils";
import {toNumber} from "lodash/lang";
import {validateInput, validateInputForSubmit} from "../../Utils/inputUtils";

export const UnstakeButton = () => {

    const dispatch = useDispatch();
    const instantUnstake = useSelector(state => state[UNSTAKE_TYPE])
    const minUntakeAmount = useSelector(state => state[MIN_UNSTAKE_AMOUNT])

    const unStakeAvax = async () => {
        try {
            if(isNaN(stkAvaxInput)) {
                return
            }
            const disable = validateInputForSubmit(balance, stkAvaxInput)
            if(disable) {
                return;
            }

            if (parseFloat(stkAvaxInput) < parseFloat(minUntakeAmount)) {
                dispatch(setMetamaskAlert({error: true, type: MIN_UNSTAKE_AMOUNT_ALLOWED, amount: minUntakeAmount}))
                return;
            }


            dispatch(actions.setTransactionInProgress());

            const hexStkAvaxInput = ethers.utils.parseEther(stkAvaxInput)

            const options = {
                contractAddress: stkAVAXContractAddress,
                functionName: "send",
                abi: stkAVAXContractABI,
                params: {
                    recipient: liquidStakingContractAddress,
                    amount: hexStkAvaxInput,
                    data: instantUnstake ? new Uint32Array(2) : []
                }
            };

            const unStakeTxn = await Moralis.executeFunction(options);
            const receipt = await unStakeTxn.wait(NO_OF_BLOCK_CONFIRMATIONS);
            // console.log(receipt)

            dispatch(actions.transactionCompleted());
            if(instantUnstake) {
                dispatch(actions.setTransactionDetails(false, {type: INSTANT_UNSTAKE, txn: unStakeTxn, amount: stkAvaxInput}));
            } else {
                dispatch(actions.setTransactionDetails(false, {type: UNSTAKED, txn: unStakeTxn, amount: stkAvaxInput}));
            }
            dispatch(unstakeAlert(true))
            dispatch(setBalance())
        } catch (error) {
            dispatch(actions.transactionCompleted());
            dispatch(actions.setTransactionDetails(true, error));
            console.log(error)
        }
    }
    const stkAvaxInput = useSelector(state => state[STK_AVAX_INPUT])
    const balance = useSelector((state) => state[STK_AVAX_BALANCE])

    const onClickHandler = () => {
        // console.log('Are you sure you want to stake ', stkAvaxInput, ' avax?')
        unStakeAvax();
    }

    // console.log({minUntakeAmount})

    const disable = (balance < stkAvaxInput) || (stkAvaxInput <= 0)

    return (
        <Button type="primary" style={{borderRadius: '5px', width:"100%"}} danger size={'large'} onClick={onClickHandler}>
            {/*Unstake AVAX*/}
            {instantUnstake ? "Unstake" : "Start delayed unstake"}
        </Button>
    )

}


/******
 *             const optionsForFetchingReqs = {
 *                 contractAddress: liquidStakingContractAddress,
 *                 functionName: "claimReqs",
 *                 abi: liquidStakingContractABI,
 *                 params: {
 *                     recipient: liquidStakingContractAddress,
 *                     amount: hexStkAvaxInput,
 *                     data:[]
 *                 }
 *             };
 * ****/