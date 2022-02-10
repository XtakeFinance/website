import React from "react";
import {useSelector} from "react-redux";
import {STK_AVAX_BALANCE, STK_AVAX_INPUT} from "../Reducers";
import {Card, Divider, Space} from "antd";
import {ConnectWalletButton} from "./ConnectWalletButton";
import {StkAvaxInput} from "./StkAvaxInput";
import {UnstakeButton} from "./UnstakeButton";
import {xAVAX} from "../AppConstants";
import {AppToolTip} from "./AppToolTip";
import {exchangeRateText} from "./StakeComponent";


const withdrawalFeeText = "There is 0% fee for unstaking your xAVAX and receiving AVAX."

export const UnstakeComponent = () => {

    const isConnected = useSelector(state => state.isConnected)
    const balance = useSelector(state => state[STK_AVAX_BALANCE])
    const exchangeRate = useSelector(state => state.exchangeRate)
    const stkAvaxInput = useSelector(state => state[STK_AVAX_INPUT])

    const recieveTokens = exchangeRate * stkAvaxInput;


    return (
        <Space wrap style={{minWidth: "100%", justifyContent: "center", padding: "2%"}}>
            <Card style={{
                borderRadius: "10px",
                background: "#1A1A1A",
                color: "white",
                border: "1px solid #333333"
            }}>
                <StkAvaxInput/>
                <Divider orientation="left" plain style={{color: "white", borderColor: "#333333"}}/>
                <div style={{textAlign: "center"}}>{isConnected ? <UnstakeButton/> : <ConnectWalletButton/>}</div>
                <Divider orientation="left" plain style={{color: "white", borderColor: "#333333"}}/>
                <table style={{padding: "20px", borderColor: "#333333", width:"100%"}}>
                    <tr>
                        <td style={{paddingRight: "160px", paddingBottom: "20px"}}>Your Balance</td>
                        <td style={{
                            textAlign: "right",
                            paddingBottom: "20px",
                            borderBottom: "white"
                        }}>{balance} {xAVAX}
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingBottom: "20px"}}>You will receive</td>
                        <td style={{textAlign: "right", paddingBottom: "20px"}}>{recieveTokens} AVAX</td>
                    </tr>
                    <tr>
                        <td style={{paddingBottom: "20px"}}>Exchange Rate <AppToolTip text={exchangeRateText}/></td>
                        <td style={{textAlign: "right", paddingBottom: "20px"}}>1 {xAVAX} ≈ {exchangeRate} AVAX</td>
                    </tr>
                    <tr>
                        <td>Withdrawal Fee <AppToolTip text={withdrawalFeeText}/></td>
                        <td style={{textAlign: "right"}}>0%</td>
                    </tr>
                </table>
            </Card>
        </Space>
    )


}