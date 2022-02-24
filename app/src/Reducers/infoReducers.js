import {SET_AVAX_PRICE_IN_DOLLARS, SET_TOTAL_AVAX_LOCKED} from "../Actions/constants";

export const priceOfAvaxReducer = (state = 0.0, action) => {
    switch (action.type) {
        case SET_AVAX_PRICE_IN_DOLLARS:
            return action.payload
        default:
            return state
    }
}

export const totalAvaxLocked = (state = 0.0, action) => {
    switch (action.type) {
        case SET_TOTAL_AVAX_LOCKED:
            return action.payload
        default:
            return state
    }
}