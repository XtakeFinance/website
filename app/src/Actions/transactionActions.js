import {
    RESET_INPUT,
    SET_AVAX_INPUT, SET_EXCHANGE_RATE, SET_INSTANT_UNSTAKE, SET_STAKE_UNSTAKE, SET_STK_AVAX_INPUT,
    SET_TRANSACTION_DETAILS,
    SET_TRANSACTION_IN_PROGRESS, SET_UNSTAKE_ALERT, UNSET_TRANSACTION_DETAILS,
    UNSET_TRANSACTION_IN_PROGRESS
} from "./constants";

export const setAvaxInput = (avaxInput) => {
    return {
        type: SET_AVAX_INPUT,
        payload: avaxInput || 0.0
    }
}

export const setStkAvaxInput = (stkAvaxInput) => {
    return {
        type: SET_STK_AVAX_INPUT,
        payload: stkAvaxInput || 0.0,
    }
}

export const resetInput = () => {
    return {
        type: RESET_INPUT,
    }
}


export const setTransactionInProgress = () => {
    return {
        type: SET_TRANSACTION_IN_PROGRESS,
    }
}

export const transactionCompleted = () => {
    return {
        type: UNSET_TRANSACTION_IN_PROGRESS,
    }
}

export const setTransactionDetails = (err, details) => {
    return {
        type: SET_TRANSACTION_DETAILS,
        payload: {
            error: err,
            details
        }
    }
}

export const unsetTransactionDetails = () => {
    return {
        type: UNSET_TRANSACTION_DETAILS,
    }
}

export const setStakeUnstake = (stake) => {
    return {
        type: SET_STAKE_UNSTAKE,
        payload: stake
    }
}

export const unstakeAlert = (alert) => {
    return {
        type: SET_UNSTAKE_ALERT,
        payload: alert
    }
}

export const setExchangeRate = (window) => {
    return {
        type: SET_EXCHANGE_RATE,
        payload: window
    }
}

export const setInstantUnstake = (payload) => {
    return {
        type: SET_INSTANT_UNSTAKE,
        payload
    }
}
