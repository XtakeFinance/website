import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IS_STAKING} from "../Reducers";
import ButtonGroup from "antd/es/button/button-group";
import {Button, Space} from "antd";
import {setStakeUnstake} from "../Actions/transactionActions";
import {buttonBg, cardBg} from "../AppConstants";

export const StakeUnstakeButtonGroup = () => {

    const isStaking = useSelector(state => state[IS_STAKING])

    const dispatch = useDispatch();

    if (isStaking) {
        return (
            <div style={{textAlign: "center"}}>
                <div style={{padding: "5px", background: buttonBg, display: "inline-block", borderRadius:"40px"}}>
                        <Button shape={"round"} size={"large"} type={'primary'} danger
                                onClick={() => dispatch(setStakeUnstake(true))}>Stake</Button>
                        <Button size={"large"} type={'text'} style={{color: "white"}}
                                onClick={() => dispatch(setStakeUnstake(false))}>Unstake</Button>
                </div>
            </div>
        )
    }

    // if (isStaking) {
    //     return (
    //         <Space wrap style={{minWidth:"100%", justifyContent:"center"}}>
    //             <ButtonGroup size={'large'} >
    //                 <Button type={'primary'} style={{borderRadius: '5px'}} danger onClick={() => dispatch(setStakeUnstake(true))}>Stake</Button>
    //                 <Button type={'ghost'} style={{color:"white", borderRadius: '5px'}} onClick={() => dispatch(setStakeUnstake(false))}>Unstake</Button>
    //             </ButtonGroup>
    //         </Space>
    //     )
    // }

    return (
        <div style={{textAlign: "center"}}>
            <div style={{padding: "5px", background: buttonBg, display: "inline-block", borderRadius:"40px"}}>
                    <Button size={'large'} type={'text'} style={{color: "white"}}
                            onClick={() => dispatch(setStakeUnstake(true))}>Stake</Button>
                    <Button size={'large'} shape={"round"} type={'primary'} danger onClick={() => dispatch(setStakeUnstake(false))}>Unstake</Button>
            </div>
        </div>
    )

}