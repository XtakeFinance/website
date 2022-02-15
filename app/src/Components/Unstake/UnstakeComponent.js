import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DELAYED_UNSTAKE_FEE, DEPOSIT_FEE, STK_AVAX_BALANCE, STK_AVAX_INPUT, UNSTAKE_NOW_FEE} from "../../Reducers";
import {Card, Divider, Space} from "antd";
import {ConnectWalletButton} from "../Utils/ConnectWalletButton";
import {StkAvaxInput} from "./StkAvaxInput";
import {UnstakeButton} from "./UnstakeButton";
import {AVAX, xAVAX} from "../../AppConstants";
import {AppToolTip} from "../Utils/AppToolTip";
import {exchangeRateText} from "../Stake/StakeComponent";
import {ClaimTableComponent} from "./ClaimTableComponent";
import {DelayedAndInstantUnstakeComponent} from "./DelayedAndInstantUnstakeComponent";
import {Container} from "@mui/material";
import {EmptyComponent} from "../Utils/UtilComponents";
import {resetInput} from "../../Actions/transactionActions";


const withdrawalFeeText = "There is 0% fee for unstaking your xAVAX and receiving AVAX."

export const UnstakeComponent = () => {

    const isConnected = useSelector(state => state.isConnected)
    const balance = useSelector(state => state[STK_AVAX_BALANCE])
    const exchangeRate = useSelector(state => state.exchangeRate)
    const stkAvaxInput = useSelector(state => state[STK_AVAX_INPUT])
    const recieveTokens = exchangeRate * stkAvaxInput;
    const unstakeNowFee = useSelector(state => state[UNSTAKE_NOW_FEE])
    const delayedUnstakeFee = useSelector(state => state[DELAYED_UNSTAKE_FEE])

    const dispatch = useDispatch()

    useEffect(()=>{
        return () => {
            console.log("unmount")
            dispatch(resetInput())
        }
    },[])


    return (
        // <Space wrap style={{minWidth: "100%", justifyContent: "center", padding: "2%"}}>
        <Container maxWidth={"sm"} sx={{padding:"2%"}}>
            <Card style={{
                borderRadius: "10px",
                background: "#1A1A1A",
                color: "white",
                border: "1px solid #333333"
            }}>
                <StkAvaxInput/>
                <Divider orientation="left" plain style={{color: "white", borderColor: "#333333"}}/>
                {isConnected ? <DelayedAndInstantUnstakeComponent/> : <EmptyComponent/>}
                <div style={{textAlign: "center"}}>
                    {
                        isConnected ? <UnstakeButton/> : <ConnectWalletButton/>
                    }
                </div>
                <Divider orientation="left" plain style={{color: "white", borderColor: "#333333"}}/>
                <table style={{padding: "20px", borderColor: "#333333", width: "100%"}}>
                    <tr>
                        <td style={{paddingBottom: "20px"}}>Your Balance</td>
                        <td style={{
                            textAlign: "right",
                            paddingBottom: "20px",
                            borderBottom: "white"
                        }}>{balance} xAVAX
                        </td>
                    </tr>
                    <tr>
                        <td>Exchange Rate <AppToolTip text={exchangeRateText}/></td>
                        <td style={{textAlign: "right"}}>1 {xAVAX} ≈ {exchangeRate} AVAX</td>
                    </tr>
                </table>
                {isConnected ? <ClaimTableComponent/> : <></>}
            </Card>
        </Container>
        // </Space>
    )


}