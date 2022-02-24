import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AVAX_BALANCE, MIN_STAKE_AMOUNT} from "../../Reducers";
import {
    AVALANCHE_TEST_NETWORK_ID_HEX,
    liquidStakingContractABI,
    liquidStakingContractAddress,
    NO_OF_BLOCK_CONFIRMATIONS
} from "../../AppConstants";
import * as actions from "../../Actions/transactionActions";
import {setBalance, setMetamaskAlert} from "../../Actions/walletActions";
import {Button} from "antd";
import Moralis from "moralis";
import {MIN_STAKE_AMOUNT_ALLOWED, STAKED} from "../../Utils/messageUtils";
import {validateInputForSubmit} from "../../Utils/inputUtils";

export const StakeButton = () => {

    const dispatch = useDispatch();
    const minStakeAmount = useSelector(state => state[MIN_STAKE_AMOUNT])

    const stakeAvax = async () => {
        try {
            if(isNaN(avaxInput)) {
                return
            }

            const disable = validateInputForSubmit(balance, avaxInput)

            if (disable) {
                return
            }

            if (parseFloat(avaxInput) < parseFloat(minStakeAmount)) {
                dispatch(setMetamaskAlert({error: true, type: MIN_STAKE_AMOUNT_ALLOWED, amount: minStakeAmount}))
                return;
            }

            dispatch(actions.setTransactionInProgress());

            const options = {
                contractAddress: liquidStakingContractAddress,
                functionName: "deposit",
                abi: liquidStakingContractABI,
                msgValue: Moralis.Units.ETH(avaxInput)
            };

            const stakeTxn = await Moralis.executeFunction(options);
            const receipt = await stakeTxn.wait(NO_OF_BLOCK_CONFIRMATIONS);
            // console.log(receipt)

            dispatch(actions.transactionCompleted());
            dispatch(actions.setTransactionDetails(false, {type: STAKED, txn: stakeTxn, amount: avaxInput}));

            dispatch(setBalance())

        } catch (error) {
            dispatch(actions.transactionCompleted());
            dispatch(actions.setTransactionDetails(true, error));
            console.log(error)
        }
    }

    const disabled = Moralis.getChainId() !== AVALANCHE_TEST_NETWORK_ID_HEX
    const avaxInput = useSelector(state => state.avaxInput)
    const balance = useSelector((state) => state[AVAX_BALANCE])

    // console.log("balance: ", balance)

    const onClickHandler = () => {
        stakeAvax();
    }


    return (
        <Button type="primary" style={{borderRadius: '5px', width: "100%"}} danger size={'large'}
                onClick={onClickHandler}>
            Stake AVAX
        </Button>
    )

}