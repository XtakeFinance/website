import {SET_DELAYED_UNSTAKE_FEE, SET_DEPOSIT_FEE, SET_REWARDS_FEE, SET_UNSTAKE_NOW_FEE} from "../Actions/constants";

export const unstakeNowFeeReducer = (state = 0.0, action) => {
    switch (action.type) {
        case SET_UNSTAKE_NOW_FEE:
            return action.payload
        default:
            return state
    }
}

export const depositFeeReducer = (state = 0.0, action) => {
    switch (action.type) {
        case SET_DEPOSIT_FEE:
            return action.payload
        default:
            return state
    }
}

export const delayedUnstakeFeeReducer = (state = 0.0, action) => {
    switch (action.type) {
        case SET_DELAYED_UNSTAKE_FEE:
            return action.payload
        default:
            return state
    }
}

export const rewardsFeeReducer = (state = 0.0, action) => {
    switch (action.type) {
        case SET_REWARDS_FEE:
            return action.payload
        default:
            return state
    }
}