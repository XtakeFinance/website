import React from "react";

export const CLAIMED = "claimed"
export const STAKED = "staked"
export const UNSTAKED = "unstaked"
export const INSTANT_UNSTAKE = "unstake_now"
export const WRONG_NETWORK = "WRONG_NETWORK"
export const METAMASK_NOT_INSTALLED = "METAMASK_NOT_INSTALLED"
export const MIN_STAKE_AMOUNT_ALLOWED = "MIN_STAKE_AMOUNT_ALLOWED"
export const MIN_UNSTAKE_AMOUNT_ALLOWED = "MIN_UNSTAKE_AMOUNT_ALLOWED"
export const UNABLE_TO_SWITCH_TO_AVALANCHE = "UNABLE_TO_SWITCH_TO_AVALANCHE"

export const transactionSuccessMessage = ({type, amount}) => {

    switch (type) {
        case CLAIMED:
            return `You have successfully claimed.`
        // return `You have successfully claimed ${amount} AVAX.`
        case STAKED:
            return `${amount} AVAX Successfully Staked.`
        case UNSTAKED:
            // return `Your request has been received. You will get your ${amount} AVAX within 2 weeks.`
            return `Your request has been received. Your request will be served within 2 weeks.`
        case INSTANT_UNSTAKE:
            return `You have successfully unstaked.`
        // return `You have successfully claimed ${amount} AVAX.`
    }

}

export const findErrorMessage = (type, amount) => {


    switch (type) {
        case METAMASK_NOT_INSTALLED:
            return (<>Metamask is not installed! <a className={"linkcss"} target="_blank"
                                                    href={"https://metamask.io/"}>Please
                click here to install Metamask.</a></>)
        case WRONG_NETWORK:
            return (<>You are not on the Avalanche test Network</>)
        case MIN_STAKE_AMOUNT_ALLOWED:
            return (<>Cannot stake less than {amount} AVAX</>)
        case MIN_UNSTAKE_AMOUNT_ALLOWED:
            return (<>Cannot withdraw less than {amount} xAVAX</>)
        case UNABLE_TO_SWITCH_TO_AVALANCHE:
            return (<>Unable to switch to avalanche testnet</>)
    }

}