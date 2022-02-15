import {SET_DELAYED_UNSTAKE_FEE, SET_DEPOSIT_FEE, SET_REWARDS_FEE, SET_UNSTAKE_NOW_FEE} from "./constants";

export const setUnstakeNowFee = (payload) => {
    return {
        type: SET_UNSTAKE_NOW_FEE,
        payload
    }
}

export const setDelayedUnstakeFee = (payload) => {
    return {
        type: SET_DELAYED_UNSTAKE_FEE,
        payload
    }
}

export const setRewardsFee = (payload) => {
    return {
        type: SET_REWARDS_FEE,
        payload
    }
}

export const setDepositFee = (payload) => {
    return {
        type: SET_DEPOSIT_FEE,
        payload
    }
}