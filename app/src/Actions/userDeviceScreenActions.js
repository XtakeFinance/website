import {SET_DEVICE_DIMENSION} from "./constants";

export const setDeviceDimensions = (width, height) => {
    return {
        type: SET_DEVICE_DIMENSION,
        payload: {width, height}
    }
}