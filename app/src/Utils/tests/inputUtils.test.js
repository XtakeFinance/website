import {validateInput, validateInputForSubmit} from "../inputUtils";

describe("input utils tests", () => {

    it('test validateInputForStaking() function', () => {
        expect(validateInputForSubmit('11', '9')).toEqual(false)
        expect(validateInputForSubmit('9', '11')).toEqual(true)
        expect(validateInputForSubmit('9', '')).toEqual(true)
    });

    it('test validateInputForStaking() function', () => {
        validateInput('f')
    });


})