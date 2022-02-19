import {validateInput} from "../inputUtils";

describe("input utils tests", () => {

    it('test validateInput() function', () => {
        expect(validateInput('11', '9')).toEqual(false)
    });



})