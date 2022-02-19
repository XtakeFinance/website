import {call, put, takeEvery} from 'redux-saga/effects'
import {
    FETCH_CLAIM_TICKETS,
    SET_AVAX_BALANCE, SET_AVAX_PRICE_IN_DOLLARS,
    SET_BALANCE, SET_DELAYED_UNSTAKE_FEE, SET_DEPOSIT_FEE,
    SET_DEVICE_DIMENSION,
    SET_DEVICE_TYPE,
    SET_EXCHANGE_RATE,
    SET_METAMASK_INSTALLED, SET_MIN_AVAX_STAKE_AMOUNT, SET_MIN_STK_AVAX_UNSTAKE_AMOUNT, SET_REWARDS_FEE,
    SET_STK_AVAX_BALANCE, SET_TOTAL_AVAX_LOCKED, SET_UNSTAKE_NOW_FEE
} from "../Actions/constants";
import Moralis from "moralis";
import {
    AVALANCHE_TESTNET,
    liquidStakingContractABI,
    liquidStakingContractAddress,
    SPEEDY_NODE_URL
} from "../AppConstants";
import {tokenFilter} from "../Utils/walletUtils";
import {ethers} from "ethers";
import _ from "lodash"
import {METAMASK_NOT_INSTALLED} from "../Utils/messageUtils";
import {findFee} from "../Utils/feeUtils";
import {bigNumberToEther} from "../Utils/ethersUtils";
import {fetchAvaxPrice} from "../APIs/fetchFromExternalSources";

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
    const xAvaxBalance = tokenFilter(tokenBalances);
    const inEther = bigNumberToEther(xAvaxBalance)
    return inEther
}

const fetchAvaxBalance = async () => {
    const AvaxBalance = await Moralis.Web3API.account.getNativeBalance({chain: AVALANCHE_TESTNET});
    const inEther = bigNumberToEther(AvaxBalance["balance"])
    return inEther
}

const fetchExchangeRate = async (ethereum) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(SPEEDY_NODE_URL)

        // const provider = new ethers.providers.Web3Provider(ethereum);
        // const signer = provider.getSigner();

        // const liquidStakingContract = new ethers.Contract(liquidStakingContractAddress, liquidStakingContractABI, signer);

        const liquidStakingContract = new ethers.Contract(liquidStakingContractAddress, liquidStakingContractABI, provider);

        const data = await liquidStakingContract.exchangeRate();
        const totalAvaxDeposited = bigNumberToEther(data[TOTAL_WEI])
        const poolTokenSupply = _.parseInt(data["poolTokenSupply"], 16)
        const totalAvax = _.parseInt(data["totalWei"], 16)
        const exchangeRate = poolTokenSupply === totalAvax ? 1 : totalAvax / poolTokenSupply
        const configData = await liquidStakingContract.config()
        const delayedUnstakeFee = findFee(configData[FEE][DELAYED_UNSTAKE_FEE])
        const depositFee = findFee(configData[FEE][DEPOSIT_FEE])
        const rewardFee = findFee(configData[FEE][REWARD_FEE])
        const MIN_AVAX_DEPOSIT = bigNumberToEther(await liquidStakingContract.MIN_AVAX_DEPOSIT())
        const MIN_TOKEN_WITHDRAWAL = bigNumberToEther(await liquidStakingContract.MIN_TOKEN_WITHDRAWAL())
        const instantUnstakeFee = (await liquidStakingContract.getInstantUnstakeFee(100000000)) / 100
        const avaxPrice = await fetchAvaxPrice()
        return {
            exchangeRate,
            instantUnstakeFee,
            delayedUnstakeFee,
            depositFee,
            rewardFee,
            MIN_AVAX_DEPOSIT,
            MIN_TOKEN_WITHDRAWAL,
            avaxPrice,
            totalAvaxDeposited,
        }
    } catch (e) {
        console.log(e)
    }
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
        const {
            exchangeRate,
            instantUnstakeFee,
            delayedUnstakeFee,
            depositFee,
            rewardFee,
            MIN_AVAX_DEPOSIT,
            MIN_TOKEN_WITHDRAWAL,
            avaxPrice,
            totalAvaxDeposited
        } = yield call(fetchExchangeRate, ethereum)
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
        yield put({
            type: SET_MIN_STK_AVAX_UNSTAKE_AMOUNT,
            payload: MIN_TOKEN_WITHDRAWAL
        })
        yield put({
            type: SET_MIN_AVAX_STAKE_AMOUNT,
            payload: MIN_AVAX_DEPOSIT
        })
        yield put({
            type: SET_AVAX_PRICE_IN_DOLLARS,
            payload: avaxPrice
        })
        yield put({
            type: SET_TOTAL_AVAX_LOCKED,
            payload: totalAvaxDeposited
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
