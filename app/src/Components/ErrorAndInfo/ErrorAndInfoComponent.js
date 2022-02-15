import React from "react";
import {useSelector} from "react-redux";
import {METAMASK_INSTALLED, SHOW_UNSTAKE_ALERT} from "../../Reducers";
import {MetamaskAlert} from "./MetamaskAlert";
import {TransactionProgress} from "./TransactionProgress";
import {TransactionDetails} from "./TransactionDetails";
import {Disclaimer} from "./Disclaimer";

export const ErrorAndInfoComponent = () => {

    const isTransactionInProgress = useSelector(state => state.transactionProgress)
    const showTransactionDetails = useSelector(state => state.transactionDetails)
    const showUnstakeAlert = useSelector(state => state[SHOW_UNSTAKE_ALERT])
    const showMetamaskAlert = useSelector(state => state[METAMASK_INSTALLED])
    // console.log({showMetamaskAlert})

    return (
        <>
            {/*<Disclaimer/>*/}
            {showMetamaskAlert.error ? <MetamaskAlert {...showMetamaskAlert}></MetamaskAlert>:<></>}
            {isTransactionInProgress ? <TransactionProgress/> : <></>}
            {showTransactionDetails.show ? <TransactionDetails {...showTransactionDetails}/> : <></>}
            {/*<TransactionDetails {...showTransactionDetails}/>*/}
        </>
    )


}