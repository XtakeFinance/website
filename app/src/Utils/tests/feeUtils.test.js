import {beautifyTVL} from "../feeUtils";

describe("fee utils tests", () => {

    it('test beautifyTVL() function', () => {
        expect(beautifyTVL(1000)).toEqual('1000')
        expect(beautifyTVL(1001)).toEqual("1K")
        console.log(beautifyTVL(1000000))
        // expect(beautifyTVL(1000000)).toEqual("1000M")
        // expect(beautifyTVL(1000000000)).toEqual("0K")
    });



})