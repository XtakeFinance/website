export const validateInputForSubmit = (balance, input) => {
    const parsedBalance = parseFloat(balance)
    const parsedInput = parseFloat(input)
    const disable = (parsedBalance < parsedInput) || (parsedInput <= 0)
    return disable
}


export const validateInput = (input) => {
    const isNumber = /^\d+\.\d+$/.test(input);
    console.log(isNumber)
}