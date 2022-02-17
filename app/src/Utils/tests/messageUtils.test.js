import React from "react";

import {
    CLAIMED,
    findErrorMessage,
    INSTANT_UNSTAKE,
    MIN_STAKE_AMOUNT_ALLOWED, MIN_UNSTAKE_AMOUNT_ALLOWED,
    STAKED,
    transactionSuccessMessage, UNABLE_TO_SWITCH_TO_AVALANCHE,
    UNSTAKED
} from "../messageUtils";

describe("message utils tests", () => {

    it('test transactionSuccessMessage() function', () => {
        expect(transactionSuccessMessage({type: CLAIMED, amount: 10})).toEqual("You have successfully claimed.")
        expect(transactionSuccessMessage({type: STAKED, amount: 10})).toEqual("10 AVAX Successfully Staked.")
        expect(transactionSuccessMessage({type: UNSTAKED, amount: 10})).toEqual("Your request has been received. Your request will be served within 2 weeks.")
        expect(transactionSuccessMessage({type: INSTANT_UNSTAKE, amount: 10})).toEqual("You have successfully unstaked.")
    });

    it('test findErrorMessage() function', () => {
        expect(findErrorMessage(MIN_STAKE_AMOUNT_ALLOWED,"0.000001")["props"]["children"].join('')).toEqual('Cannot stake less than 0.000001 AVAX')
        expect(findErrorMessage(MIN_UNSTAKE_AMOUNT_ALLOWED,"0.000001")["props"]["children"].join('')).toEqual("Cannot withdraw less than 0.000001 xAVAX")
        expect(findErrorMessage(UNABLE_TO_SWITCH_TO_AVALANCHE)["props"]["children"]).toEqual("Unable to switch to avalanche testnet")
    });

})