const NUMERATOR = "numerator"
const DENOMINTOR = "denominator"

const MILLION = 1000000
const BILLION = 1000000000
const KILO = 1000

export const findFee = (fee) => {
    const actualFee = (fee[NUMERATOR].toNumber()) / (fee[DENOMINTOR].toNumber())
    return actualFee
}

export const beautifyTVL = (value) => {
    if (value > BILLION) {
        return `${parseInt(value / BILLION)}B`
    } else if (value > MILLION) {
        return `${parseInt(value/MILLION)}M`
    } else if (value > KILO) {
        return `${parseInt(value/KILO)}K`
    } else {
        return `${parseInt(value/1)}`
    }
}

