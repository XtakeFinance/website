const NUMERATOR = "numerator"
const DENOMINTOR = "denominator"

export const findFee = (fee) => {
    const actualFee = (fee[NUMERATOR].toNumber()) / (fee[DENOMINTOR].toNumber())
    console.log({actualFee})
    return actualFee
}