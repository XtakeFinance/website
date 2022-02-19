export const validateInput = (balance, input) => {
    const parsedBalance = parseFloat(balance)
    const parsedInput = parseFloat(input)
    const disable = (parsedBalance < parsedInput) || (parsedInput <= 0)
    return disable
}