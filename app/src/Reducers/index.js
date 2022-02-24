import {combineReducers} from "redux"
import {
    avaxInputReducer,
    exchangeRateReducer,
    setStakeUnstakeReducer,
    setTransactionDetailsReducer,
    setTransactionReducer,
    stkAvaxInputReducer,
    unstakeAlertReducer, unstakeTypeReducer
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
import {
    delayedUnstakeFeeReducer,
    depositFeeReducer,
    minimumAvaxThatCanBeStakedReducer, minimumStkAvaxThatCanBeUnstakedReducer,
    rewardsFeeReducer,
    unstakeNowFeeReducer
} from "./feeReducers";
import {priceOfAvaxReducer, totalAvaxLocked} from "./infoReducers";

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
export const UNSTAKE_TYPE = "unstakeTypeReducer"
export const UNSTAKE_NOW_FEE = "unstakeNowFeeReducer"
export const DELAYED_UNSTAKE_FEE = "delayedUnstakeFeeReducer"
export const REWARDS_FEE = "rewardsFeeReducer"
export const DEPOSIT_FEE = "depositFeeReducer"
export const MIN_STAKE_AMOUNT = "MIN_STAKE_AMOUNT"
export const MIN_UNSTAKE_AMOUNT = "MIN_UNSTAKE_AMOUNT"
export const AVAX_PRICE_IN_DOLLARS = "AVAX_PRICE_IN_DOLLARS"
export const TOTAL_AVAX_LOCKED = "TOTAL_AVAX_LOCKED"

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
    [DEVICE_TYPE]: deviceTypeReducer,
    [UNSTAKE_TYPE]: unstakeTypeReducer,
    [UNSTAKE_NOW_FEE] : unstakeNowFeeReducer,
    [DELAYED_UNSTAKE_FEE] : delayedUnstakeFeeReducer,
    [REWARDS_FEE] : rewardsFeeReducer,
    [DEPOSIT_FEE] : depositFeeReducer,
    [MIN_STAKE_AMOUNT] : minimumAvaxThatCanBeStakedReducer,
    [MIN_UNSTAKE_AMOUNT] : minimumStkAvaxThatCanBeUnstakedReducer,
    [AVAX_PRICE_IN_DOLLARS] : priceOfAvaxReducer,
    [TOTAL_AVAX_LOCKED] : totalAvaxLocked
})

export default reducers