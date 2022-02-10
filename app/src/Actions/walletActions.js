import {
    FETCH_CLAIM_TICKETS,
    RESET_BALANCE,
    SET_ACCOUNT,
    SET_AVAX_BALANCE,
    SET_BALANCE,
    SET_CONNECTION,
    SET_CONTRACT_DETAILS,
    SET_METAMASK_INSTALLED,
    SET_STK_AVAX_BALANCE
} from "./constants";

export const setAccount = (account) => {
    return {
        type: SET_ACCOUNT,
        payload: account
    }
}

export const setBalance =  () => {
    return {
        type: SET_BALANCE,
    }
}

export const setStkAvaxBalance =  (payload) => {
    return {
        type: SET_STK_AVAX_BALANCE,
        payload
    }
}

export const setAvaxBalance =  (payload) => {
    return {
        type: SET_AVAX_BALANCE,
        payload
    }
}

export const resetBalance =  () => {
    return {
        type: RESET_BALANCE,
    }
}

export const setConnection = (isConnected) => {
    return {
        type: SET_CONNECTION,
        payload: isConnected
    }
}

export const setContract = (contract) => {
    return {
        type: SET_CONTRACT_DETAILS,
        payload: contract
    }
}

export const setMetamaskAlert = (payload) => {
    return {
        type: SET_METAMASK_INSTALLED,
        payload
    }
}

export const fetchClaimTickets = (account) => {
    return {
        type: FETCH_CLAIM_TICKETS,
        payload: account
    }
}