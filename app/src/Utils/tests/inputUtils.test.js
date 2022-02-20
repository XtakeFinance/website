import {validateInput, validateInputForSubmit} from "../inputUtils";

describe("input utils tests", () => {

    it('test validateInputForStaking() function', () => {
        expect(validateInputForSubmit('11', '9')).toEqual(false)
    });

    it('test validateInputForStaking() function', () => {
        validateInput('f')
    });


})