import {SET_DEVICE_DIMENSION, SET_DEVICE_TYPE} from "../Actions/constants";
import {DESKTOP, LAPTOP, MOBILE, TAB} from "../AppConstants";
import {SET_DEVICE_DIMENSION_SUCCESS} from "../Sagas/appSaga";

export const deviceDimensionUser = (state = {width: 0, height: 0}, action) => {
    switch (action.type) {
        case SET_DEVICE_DIMENSION_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const deviceTypeReducer = (state = LAPTOP, action) => {

    switch (action.type) {
        case SET_DEVICE_TYPE:
            const width = action.payload;
            if (width > 1800)
                return DESKTOP
            else if (width > 912 && width <= 1800)
                return LAPTOP
            else if (width > 412 && width <= 912)
                return TAB
            else return MOBILE
        default:
            return state
    }

}