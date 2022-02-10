import React from "react";
import {Card, Space} from "antd";
import Title from "antd/es/typography/Title";
import {xAVAX} from "../AppConstants";

export const Steps = () => {

    return (
        <Space wrap size={'large'} style={{minWidth: "100%", justifyContent: "center", padding: "2%"}}>
            <Card style={{width: 300, background: "black", color: "#B3B3B3", textAlign: "center", borderColor:"black"}}>
                <Space wrap size={'large'} style={{minWidth: "100%", justifyContent: "center", padding: "2%"}}>

                <div style={{textAlign:"center"}}><h2 style={{
                    width: "40px",
                    color: "#ff4d4f",
                    borderColor: "#ff4d4f",
                    borderRadius: "360px",
                    border: "1px solid"
                }}>1</h2></div></Space>
                <Title level={3} style={{color: "white"}}>Connect wallet</Title>
                We support your favourite Avalanche wallets. Just click “Connect Wallet”. That's it.
            </Card>
            <Card style={{width: 300,background: "black", color: "#B3B3B3",textAlign: "center", borderColor:"black" }}>
                <Space wrap size={'large'} style={{minWidth: "100%", justifyContent: "center", padding: "2%"}}>

                <div style={{alignContent:"center"}}><h2 style={{
                    width: "40px",
                    color: "#ff4d4f",
                    borderColor: "#ff4d4f",
                    borderRadius: "360px",
                    border: "1px solid"
                }}>2</h2></div></Space>
                <Title level={3} style={{color: "white"}}>Stake AVAX, receive {xAVAX}</Title>

                Enter the amount of AVAX to stake using xtake’s liquid staking UI and instantly receive {xAVAX} in return.            </Card>
            <Card style={{width: 300,background: "black", color: "#B3B3B3", textAlign: "center", borderColor:"black"}}>
                <Space wrap size={'large'} style={{minWidth: "100%", justifyContent: "center", padding: "2%"}}>
                    <div style={{alignContent:"center"}}><h2 style={{
                    width: "40px",
                    color: "#ff4d4f",
                    borderColor: "#ff4d4f",
                    borderRadius: "360px",
                    border: "1px solid"
                    }}>3</h2></div></Space>
                <Title level={3} style={{color: "white"}}>Participate in DeFi</Title>

                Now, you’re free to use your liquid {xAVAX} with our DeFi partners to earn more yields, or simply swap back to AVAX any time you like.            </Card>
        </Space>
    )

}