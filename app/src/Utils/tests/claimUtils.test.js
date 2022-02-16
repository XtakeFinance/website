import {beautifyDate} from "../claimUtils";

describe("claim utils tests", () => {

    it('test beautifyDate() function', () => {
        const date = new Date(2018, 11, 24, 10, 33, 30, 0);
        const beautifiedDate = beautifyDate(date.toString())
        const expectedBeautifiedDate = 'Mon Dec 24 2018 10:33:30'
        expect(beautifiedDate).toEqual(expectedBeautifiedDate)
    });



})