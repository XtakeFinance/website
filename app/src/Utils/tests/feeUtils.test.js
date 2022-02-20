import {beautifyTVL} from "../feeUtils";

describe("fee utils tests", () => {

    it('test beautifyTVL() function', () => {
        expect(beautifyTVL(1000)).toEqual('1000')
        expect(beautifyTVL(1001)).toEqual("1K")
        expect(beautifyTVL(10100111)).toEqual("10.1M")
        expect(beautifyTVL(10230000001)).toEqual("10.23B")
        // expect(beautifyTVL(1000000)).toEqual("1000M")
        // expect(beautifyTVL(1000000000)).toEqual("0K")
    });



})