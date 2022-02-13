import React from "react";
import {Button} from "antd";
import {ethers} from "ethers";
import * as actions from "../../Actions/transactionActions";
import {
    liquidStakingContractABI,
    liquidStakingContractAddress, NO_OF_BLOCK_CONFIRMATIONS,
    stkAVAXContractABI,
    stkAVAXContractAddress
} from "../../AppConstants";
import {STK_AVAX_BALANCE, STK_AVAX_INPUT} from "../../Reducers";
import {useDispatch, useSelector} from "react-redux";
import Moralis from "moralis";
import {unstakeAlert} from "../../Actions/transactionActions";
import {setBalance} from "../../Actions/walletActions";

export const UnstakeButton = () => {

    const dispatch = useDispatch();

    const unStakeAvax = async () => {
        try {

            const disable = (balance <= stkAvaxInput) || (stkAvaxInput <= 0)
            if(disable) {
                return;
            }

            dispatch(actions.setTransactionInProgress());

            const hexStkAvaxInput = ethers.utils.parseEther(stkAvaxInput.toString())

            // const approveOptions = {
            //     contractAddress: stkAVAXContractAddress,
            //     functionName: "approve",
            //     abi: stkAVAXContractABI,
            //     params: {
            //         spender: liquidStakingContractAddress,
            //         amount: hexStkAvaxInput,
            //     }
            // };
            //
            // const approveTxn = await Moralis.executeFunction(approveOptions);
            // const approveReceipt = await approveTxn.wait(NO_OF_BLOCK_CONFIRMATIONS);
            // console.log(approveReceipt)

            const options = {
                contractAddress: stkAVAXContractAddress,
                functionName: "send",
                abi: stkAVAXContractABI,
                params: {
                    recipient: liquidStakingContractAddress,
                    amount: hexStkAvaxInput,
                    data:[]
                }
            };

            const unStakeTxn = await Moralis.executeFunction(options);
            const receipt = await unStakeTxn.wait(NO_OF_BLOCK_CONFIRMATIONS);
            console.log(receipt)


            const optionsForFetchingReqs = {
                contractAddress: liquidStakingContractAddress,
                functionName: "claimReqs",
                abi: liquidStakingContractABI,
                params: {
                    recipient: liquidStakingContractAddress,
                    amount: hexStkAvaxInput,
                    data:[]
                }
            };

            dispatch(actions.transactionCompleted());
            dispatch(actions.setTransactionDetails(false, unStakeTxn));
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
        console.log('Are you sure you want to stake ', stkAvaxInput, ' avax?')
        unStakeAvax();
    }

    return (
        <Button type="primary" style={{borderRadius: '5px', width:"100%"}} danger size={'large'} onClick={onClickHandler}>
            Unstake AVAX
        </Button>
    )

}