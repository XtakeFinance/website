import {value} from "lodash/seq";

const NUMERATOR = "numerator"
const DENOMINTOR = "denominator"

const MILLION = 1000000
const BILLION = 1000000000
const KILO = 1000

export const findFee = (fee) => {
    const actualFee = (fee[NUMERATOR].toNumber()) / (fee[DENOMINTOR].toNumber())
    return actualFee
}

const parse = (value, denominator) => {
    const floatingNumber = value/denominator
    return parseFloat(floatingNumber.toFixed(2))
}

export const beautifyTVL = (value) => {
    if (value > BILLION) {
        return `${parse(value, BILLION)}B`
    } else if (value > MILLION) {
        return `${parse(value, MILLION)}M`
    } else if (value > KILO) {
        return `${parse(value, KILO)}K`
    } else {
        return `${parse(value, 1)}`
    }
}

