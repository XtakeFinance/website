import _ from 'lodash'

export const validateInputForSubmit = (balance, input) => {
    const parsedInput = parseFloat(input)
    if (_.isNaN(parsedInput)) {
        return true
    }
    const parsedBalance = parseFloat(balance)
    const disable = (parsedBalance < parsedInput) || (parsedInput <= 0)
    return disable
}


export const validateInput = (input) => {
    const isNumber = /^\d+\.\d+$/.test(input);
    // console.log(isNumber)
}