import {utils} from "ethers";

export const bigNumberToEther = (bigNumber) => {
    return utils.formatEther(bigNumber)
}

export const etherToBigNumber = (ether) => {
    return utils.parseEther(ether)
}