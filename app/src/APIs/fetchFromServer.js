import Moralis from "moralis";
import {AVALANCHE_TESTNET, liquidStakingContractABI, liquidStakingContractAddress} from "../AppConstants";

export const fetchDataFromLiquidStakingContract = async (extraOptions) => {
    const data = await Moralis.Web3API.native.runContractFunction({
        chain: AVALANCHE_TESTNET,
        address: liquidStakingContractAddress,
        abi: liquidStakingContractABI,
        ...extraOptions
    });
    return data
}


export const fetchDataFromTokenContract = async () => {

}

export const fetchDataLiquidityPoolContract = async () => {

}