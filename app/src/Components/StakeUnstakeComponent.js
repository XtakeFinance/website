import React from "react";
import {useSelector} from "react-redux";
import {StakeComponent} from "./Stake/StakeComponent";
import {IS_STAKING} from "../Reducers";
import {UnstakeComponent} from "./Unstake/UnstakeComponent";

export const StakeUnstakeComponent = () => {

    const isStaking = useSelector(state => state[IS_STAKING])

    return (
        <>
            {isStaking ? <StakeComponent/> : <UnstakeComponent/>}
        </>
    )

}