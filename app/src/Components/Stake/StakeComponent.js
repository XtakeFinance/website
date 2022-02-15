import React, {useEffect} from "react";
import {AVAX_BALANCE, DEPOSIT_FEE} from "../../Reducers";
import {useDispatch, useSelector} from "react-redux";
import {Card, Divider, Space} from "antd";

import {ConnectWalletButton} from "../Utils/ConnectWalletButton";
import {AvaxInput} from "./AvaxInput";
import {StakeButton} from "./StakeButton";
import {xAVAX} from "../../AppConstants";
import {AppToolTip} from "../Utils/AppToolTip";
import {Container} from "@mui/material";
import {resetInput} from "../../Actions/transactionActions";

export const exchangeRateText = "xAVAX/AVAX price increases because staking rewards are accumulated into the AVAX stake pool. Therefore, the ratio is not 1:1. This ratio only goes up with time."
const depositFeeText = "There is 0% fee for staking your AVAX and receiving xAVAX."

export const StakeComponent = () => {

    const dispatch = useDispatch()

    const depositFee = useSelector(state => state[DEPOSIT_FEE])
    const isConnected = useSelector(state => state.isConnected)
    const balance = useSelector(state => state[AVAX_BALANCE])
    const exchangeRate = useSelector(state => state.exchangeRate)
    const avaxInput = useSelector(state => state.avaxInput)

    const recieveTokens = (1 / exchangeRate) * avaxInput;

    useEffect(()=>{
        return () => {
            dispatch(resetInput())
        }
    })

    return (
        // <Space wrap style={{minWidth: "100%", justifyContent: "center", padding: "2%"}}>

        <Container maxWidth={"sm"} sx={{padding:"2%"}}>
            <Card
            style={{
                borderRadius: "10px",
                background: "#1A1A1A", color: "white",
                border: "1px solid #333333"
            }}
        >
            <AvaxInput/>
            <Divider orientation="left" plain style={{color: "white", borderColor: "#333333"}}/>
            <div style={{textAlign: "center"}}>{isConnected ? <StakeButton/> : <ConnectWalletButton/>}</div>
            <Divider orientation="left" plain style={{color: "white", borderColor: "#333333"}}/>
            <table style={{width: "100%", padding: "20px", borderColor: "#333333",}}>
                <tr>
                    <td style={{paddingBottom: "20px"}}>Your Balance</td>
                    <td style={{
                        textAlign: "right",
                        paddingBottom: "20px",
                        borderBottom: "white"
                    }}>{balance} AVAX
                    </td>
                </tr>
                <tr>
                    <td style={{paddingBottom: "20px"}}>You will receive</td>
                    <td style={{textAlign: "right", paddingBottom: "20px"}}>{recieveTokens} {xAVAX}</td>
                </tr>
                <tr>
                    <td style={{paddingBottom: "20px"}}>Exchange Rate <AppToolTip text={exchangeRateText}/></td>
                    <td style={{textAlign: "right", paddingBottom: "20px"}}>1 {xAVAX} ≈ {exchangeRate} AVAX</td>
                </tr>
                <tr>
                    <td>Deposit Fee <AppToolTip text={depositFeeText}/></td>
                    <td style={{textAlign: "right"}}>{depositFee}%</td>
                </tr>
            </table>
        </Card>
        </Container>

        // </Space>
    )


}