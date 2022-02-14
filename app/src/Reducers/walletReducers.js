import {
    RESET_BALANCE,
    SET_ACCOUNT,
    SET_AVAX_BALANCE,
    SET_CONNECTION,
    SET_CONTRACT_DETAILS, SET_METAMASK_INSTALLED,
    SET_STK_AVAX_BALANCE
} from "../Actions/constants";
import {SET_BALANCE_SUCCESS} from "../Sagas/appSaga";
import {AVAX_BALANCE, TOKEN_BALANCE} from "./index";

export const accountReducer = (state = '', action) => {
    switch (action.type) {
        case SET_ACCOUNT:
            return action.payload
        default:
            return state
    }
}

export const balanceReducer = (state = {[AVAX_BALANCE]: 0.0, [TOKEN_BALANCE]: 0.0}, action) => {
    switch (action.type) {
        case SET_BALANCE_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const avaxBalanceReducer = (state = 0.0, action) => {
    switch (action.type) {
        case SET_AVAX_BALANCE:
            return action.payload
        case RESET_BALANCE:
            return 0.0
        default:
            return state
    }
}

export const stkAvaxBalanceReducer = (state = 0.0, action) => {
    switch (action.type) {
        case SET_STK_AVAX_BALANCE:
            return action.payload
        case RESET_BALANCE:
            return 0.0
        default:
            return state
    }
}

export const connectionReducer = (state = false, action) => {
    switch (action.type) {
        case SET_CONNECTION:
            return action.payload
        default:
            return state
    }
}

export const contractReducer = (state = '', action) => {
    switch (action.type) {
        case SET_CONTRACT_DETAILS:
            return action.payload
        default:
            return state
    }
}

export const metamaskReducer = (state = {error:false, type:""}, action) => {
    switch (action.type) {
        case SET_METAMASK_INSTALLED:
            return action.payload
        default:
            return state
    }
}