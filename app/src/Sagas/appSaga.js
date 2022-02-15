import {call, put, takeEvery} from 'redux-saga/effects'
import {
    FETCH_CLAIM_TICKETS,
    SET_AVAX_BALANCE,
    SET_BALANCE, SET_DELAYED_UNSTAKE_FEE, SET_DEPOSIT_FEE,
    SET_DEVICE_DIMENSION,
    SET_DEVICE_TYPE,
    SET_EXCHANGE_RATE,
    SET_METAMASK_INSTALLED, SET_REWARDS_FEE,
    SET_STK_AVAX_BALANCE, SET_UNSTAKE_NOW_FEE
} from "../Actions/constants";
import Moralis from "moralis";
import {AVALANCHE_TESTNET, liquidStakingContractABI, liquidStakingContractAddress} from "../AppConstants";
import {tokenFilter} from "../Utils/walletUtils";
import {ethers} from "ethers";
import _ from "lodash"
import {METAMASK_NOT_INSTALLED} from "../Components/ErrorAndInfo/MetamaskAlert";
import {findFee} from "../Utils/feeUtils";

export const SET_BALANCE_SUCCESS = "SET_BALANCE_SUCCESS";
export const SET_EXCHANGE_RATE_SUCCESS = "SET_EXCHANGE_RATE_SUCCESS";
export const SET_DEVICE_DIMENSION_SUCCESS = "SET_DEVICE_DIMENSION_SUCCESS"

const FEE = "fee"
const POOL_TOKEN_SUPPLY = "poolTokenSupply"
const TOTAL_WEI = "totalWei"

const INSTANT_UNSTAKE_FEE = "instantUnstake"
const DELAYED_UNSTAKE_FEE = "delayedUnstake"
const DEPOSIT_FEE = "deposit"
const REWARD_FEE = "reward"
const TREASURY_CUT = "treasuryCut"

const fetchStkAvaxBalance = async () => {
    const tokenBalances = await Moralis.Web3API.account.getTokenBalances({chain: AVALANCHE_TESTNET});
    return tokenFilter(tokenBalances) / (10 ** 18)
}

const fetchAvaxBalance = async () => {
    const AvaxBalance = await Moralis.Web3API.account.getNativeBalance({chain: AVALANCHE_TESTNET});
    return AvaxBalance.balance / (10 ** 18)
}

const fetchExchangeRate = async (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const liquidStakingContract = new ethers.Contract(liquidStakingContractAddress, liquidStakingContractABI, signer);
    const data = await liquidStakingContract.exchangeRate();
    const poolTokenSupply = _.parseInt(data["poolTokenSupply"], 16)
    const totalAvax = _.parseInt(data["totalWei"], 16)
    const exchangeRate = poolTokenSupply === totalAvax ? 1 : totalAvax / poolTokenSupply
    const configData = await liquidStakingContract.config()
    // console.log({configData})
    const instantUnstakeFee = findFee(configData[FEE][INSTANT_UNSTAKE_FEE][TREASURY_CUT])
    const delayedUnstakeFee = findFee(configData[FEE][DELAYED_UNSTAKE_FEE])
    const depositFee = findFee(configData[FEE][DEPOSIT_FEE])
    const rewardFee = findFee(configData[FEE][REWARD_FEE])
    return {exchangeRate, instantUnstakeFee, delayedUnstakeFee, depositFee, rewardFee}
}

function* getAccountBalance() {

    const avaxBalance = yield call(fetchAvaxBalance)
    const stkAvaxBalance = yield call(fetchStkAvaxBalance)

    yield put({
        type: SET_AVAX_BALANCE,
        payload: avaxBalance
    });

    yield put({
        type: SET_STK_AVAX_BALANCE,
        payload: stkAvaxBalance
    });
};

function* setDeviceDetails(action) {
    yield put({
        type: SET_DEVICE_DIMENSION_SUCCESS,
        payload: action.payload
    });

    yield put({
        type: SET_DEVICE_TYPE,
        payload: action.payload["width"]
    });
}

function* setExchangeRateDetails(action) {
    const {ethereum} = action.payload
    try {
        if (!ethereum || !ethereum.on) {
            yield put({
                type: SET_METAMASK_INSTALLED,
                payload: {error: true, type: METAMASK_NOT_INSTALLED}
            });
        }
        const {exchangeRate, instantUnstakeFee, delayedUnstakeFee, depositFee, rewardFee} = yield call(fetchExchangeRate, ethereum)
        yield put({
            type: SET_EXCHANGE_RATE_SUCCESS,
            payload: exchangeRate
        })
        yield put({
            type: SET_EXCHANGE_RATE_SUCCESS,
            payload: exchangeRate
        })
        yield put({
            type: SET_UNSTAKE_NOW_FEE,
            payload: instantUnstakeFee
        })
        yield put({
            type: SET_DELAYED_UNSTAKE_FEE,
            payload: delayedUnstakeFee
        })
        yield put({
            type: SET_DEPOSIT_FEE,
            payload: depositFee
        })
        yield put({
            type: SET_REWARDS_FEE,
            payload: rewardFee
        })
    } catch (e) {
    }
}

function* fetchAndSetClaimTickets(action) {
    console.log(action)
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* appSaga() {
    yield takeEvery(SET_BALANCE, getAccountBalance);
    yield takeEvery(SET_DEVICE_DIMENSION, setDeviceDetails);
    yield takeEvery(SET_EXCHANGE_RATE, setExchangeRateDetails);
    yield takeEvery(FETCH_CLAIM_TICKETS, fetchAndSetClaimTickets)
}

/*
*
*         yield put({
            type: SET_EXCHANGE_RATE_SUCCESS,
            payload: exchangeRate
        })
        yield put({
            type: SET_UNSTAKE_NOW_FEE,
            payload: instantUnstakeFee
        })
        yield put({
            type: SET_DELAYED_UNSTAKE_FEE,
            payload: delayedUnstakeFee
        })
        yield put({
            type: SET_DEPOSIT_FEE,
            payload: depositFee
        })
        yield put({
            type: SET_REWARDS_FEE,
            payload: rewardFee
        })
*
*
* */