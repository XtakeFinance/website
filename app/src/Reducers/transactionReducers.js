import {
    RESET_INPUT,
    SET_AVAX_INPUT,
    SET_EXCHANGE_RATE, SET_INSTANT_UNSTAKE,
    SET_STAKE_UNSTAKE,
    SET_STK_AVAX_INPUT,
    SET_TRANSACTION_DETAILS,
    SET_TRANSACTION_IN_PROGRESS, SET_UNSTAKE_ALERT,
    UNSET_TRANSACTION_DETAILS,
    UNSET_TRANSACTION_IN_PROGRESS
} from "../Actions/constants";
import {SET_EXCHANGE_RATE_SUCCESS} from "../Sagas/appSaga";


export const avaxInputReducer = (state = '', action) => {
    switch (action.type) {
        case SET_AVAX_INPUT:
            return action.payload
        case RESET_INPUT:
            return ''
        default:
            return state
    }
}

export const stkAvaxInputReducer = (state = '', action) => {
    switch (action.type) {
        case SET_STK_AVAX_INPUT:
            return action.payload
        case RESET_INPUT:
            return ''
        default:
            return state
    }
}

export const exchangeRateReducer = (state = 1.0, action) => {
    switch (action.type) {
        case SET_EXCHANGE_RATE_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const setTransactionReducer = (state = false, action) => {
    switch (action.type) {
        case SET_TRANSACTION_IN_PROGRESS:
            return true
        case UNSET_TRANSACTION_IN_PROGRESS:
            return false
        default:
            return state
    }
}

export const setTransactionDetailsReducer = (state = {show: false}, action) => {
    switch (action.type) {
        case SET_TRANSACTION_DETAILS:
            return { ...action.payload, show: true}
        case UNSET_TRANSACTION_DETAILS:
            return {show: false}
        default:
            return state
    }
}

export const setStakeUnstakeReducer = (state = true, action) => {
    switch (action.type) {
        case SET_STAKE_UNSTAKE:
            return action.payload
        default:
            return state
    }
}

export const unstakeAlertReducer = (state = false, action) => {
    switch (action.type) {
        case SET_UNSTAKE_ALERT:
            return action.payload
        default:
            return state
    }
}

export const unstakeTypeReducer = (state = true, action) => {
    switch (action.type) {
        case SET_INSTANT_UNSTAKE:
            return action.payload
        default:
            return state
    }
}