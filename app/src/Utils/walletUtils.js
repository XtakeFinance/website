import _ from 'lodash'
import {
    stkAVAXContractAddress,
} from "../AppConstants";
import {BALANCE} from "../Reducers";


const GET_METAMASK = "Get Metamask!";
const NO_AUTHORIZED_ACCOUNT = "No authorized account found";
const ETH_REQUEST_ACCOUNTS = "eth_requestAccounts";
const AVALANCHE_TEST_NETWORK_ID = "43113"

export const tokenFilter = (tokens) => {
    const token = _.find((tokens), (token) => token["token_address"].toUpperCase() === stkAVAXContractAddress.toUpperCase())
    if (!_.isEmpty(token)) {
        return token[BALANCE]
    }
    return 0.0
}


