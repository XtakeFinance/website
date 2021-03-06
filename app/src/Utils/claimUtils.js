import _ from "lodash"

import {ethers} from "ethers"
import {bigNumberToEther} from "./ethersUtils";
import {toNumber} from "lodash/lang";

const DEADLINE = "deadline"
const AVAX_TO_RETURN = "weiToReturn"
const ID = "id"
const USER = "user"

export const filterClaims = (claims) => {

    // console.log({claims})

    const validClaims = _.filter(claims, (claim) => {
        const address = _.parseInt(claim[1], 16)
        const claimAmount = _.parseInt(claim[2], 16)
        const deadline = _.parseInt(claim[3], 16)

        // const address = _.parseInt(claim[USER], 16)
        // const claimAmount = ethers.utils.formatEther(claim[AVAX_TO_RETURN])
        // const deadline = claim[DEADLINE].toNumber


        return address !== 0 && claimAmount !== 0 && deadline !== 0

    })

    // console.log({validClaims})

    const validClaimObjects = _.map(validClaims, validClaim => {
        const id = toNumber(validClaim[0])
        const claimAmount = bigNumberToEther(validClaim[2])
        const deadline = new Date((toNumber(validClaim[3])) * 1000)
        return {
            id,
            claimAmount,
            deadline
        }
    })

    return validClaimObjects

}

export const beautifyDate = (deadline) => {
    const index = deadline.lastIndexOf(':') + 3
    const dateToClaim = (deadline.substring(0, index))
    return dateToClaim;
}