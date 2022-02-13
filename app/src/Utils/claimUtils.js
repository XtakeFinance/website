import _ from "lodash"

import {BigNumber, ethers} from "ethers"

const DEADLINE = "deadline"
const AVAX_TO_RETURN = "avaxToReturn"
const ID = "id"

export const filterClaims = (claims) => {

    const validClaims = _.filter(claims, (claim) => {
        const address = _.parseInt(claim[1], 16)
        const claimAmount = _.parseInt(claim[2], 16)
        const deadline = _.parseInt(claim[3], 16)

        return address !== 0 && claimAmount !== 0 && deadline !== 0

    })

    const validClaimObjects = _.map(validClaims, validClaim => {
        const id = validClaim[ID].toNumber()
        const claimAmount = ethers.utils.formatEther(validClaim[AVAX_TO_RETURN])
        const deadline = new Date((validClaim[DEADLINE].toNumber()) * 1000)
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