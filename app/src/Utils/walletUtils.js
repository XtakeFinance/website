import _ from 'lodash'
import {
    stkAVAXContractAddress,
} from "../AppConstants";
import {BALANCE} from "../Reducers";

export const tokenFilter = (tokens) => {
    const token = _.find((tokens), (token) => token["token_address"].toUpperCase() === stkAVAXContractAddress.toUpperCase())
    if (!_.isEmpty(token)) {
        return token[BALANCE]
    }
    return 0.0
}

export const calculateReturn = (amount, fee) => {
    if(isNaN(amount))
        return 0
    return amount * (1 - (fee/100))
}



