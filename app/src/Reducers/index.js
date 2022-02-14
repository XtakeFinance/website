import {combineReducers} from "redux"
import {
    avaxInputReducer,
    exchangeRateReducer,
    setStakeUnstakeReducer,
    setTransactionDetailsReducer,
    setTransactionReducer,
    stkAvaxInputReducer,
    unstakeAlertReducer
} from "./transactionReducers";
import {
    accountReducer,
    avaxBalanceReducer,
    balanceReducer,
    connectionReducer,
    contractReducer, metamaskReducer,
    stkAvaxBalanceReducer
} from "./walletReducers";
import {deviceDimensionUser, deviceTypeReducer} from "./userDeviceScreenReducers";

export const IS_STAKING = "isStaking";
export const CONTRACTS = "contracts"
export const BALANCE = "balance"
export const TOKEN_BALANCE = "tokenBalance";
export const AVAX_BALANCE = "avaxBalance"
export const STK_AVAX_BALANCE = "stkAvaxBalance"
export const AVAX_INPUT = "avaxInput";
export const STK_AVAX_INPUT = "stkAvaxInput";
export const ACCOUNT = "account";
export const SHOW_UNSTAKE_ALERT = "SHOW_UNSTAKE_ALERT"
export const DEVICE_DIMENSION = "DEVICE_DIMENSION"
export const METAMASK_INSTALLED = "METAMASK_INSTALLED"
export const DEVICE_TYPE = "DEVICE_TYPE";
export const IS_CONNECTED = "isConnected"


const reducers = combineReducers({
    account: accountReducer,
    [IS_CONNECTED]: connectionReducer,
    [BALANCE]: balanceReducer,
    [AVAX_INPUT]: avaxInputReducer,
    [STK_AVAX_INPUT]: stkAvaxInputReducer,
    exchangeRate: exchangeRateReducer,
    transactionProgress: setTransactionReducer,
    transactionDetails: setTransactionDetailsReducer,
    [CONTRACTS]: contractReducer,
    [IS_STAKING]: setStakeUnstakeReducer,
    [AVAX_BALANCE]: avaxBalanceReducer,
    [STK_AVAX_BALANCE]: stkAvaxBalanceReducer,
    [SHOW_UNSTAKE_ALERT]: unstakeAlertReducer,
    [DEVICE_DIMENSION]: deviceDimensionUser,
    [METAMASK_INSTALLED]: metamaskReducer,
    [DEVICE_TYPE]: deviceTypeReducer
})

export default reducers