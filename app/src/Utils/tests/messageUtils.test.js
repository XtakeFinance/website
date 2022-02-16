import {CLAIMED, INSTANT_UNSTAKE, STAKED, transactionSuccessMessage, UNSTAKED} from "../messageUtils";

describe("message utils tests", () => {

    it('test transactionSuccessMessage() function', () => {
        expect(transactionSuccessMessage({type: CLAIMED, amount: 10})).toEqual("You have successfully claimed.")
        expect(transactionSuccessMessage({type: STAKED, amount: 10})).toEqual("10 AVAX Successfully Staked.")
        expect(transactionSuccessMessage({type: UNSTAKED, amount: 10})).toEqual("Your request has been received. Your request will be served within 2 weeks.")
        expect(transactionSuccessMessage({type: INSTANT_UNSTAKE, amount: 10})).toEqual("You have successfully unstaked.")
    });

})