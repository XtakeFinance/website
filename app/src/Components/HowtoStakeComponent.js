import React from "react";
import {appColor, secondaryTextColor} from "../AppConstants";
import Title from "antd/lib/typography/Title";
import {Link} from "@mui/material";

export const HowtoStakeComponent = () => {

    return (

        <div style={{textAlign: "center", padding:"3% 10% 2% 10%"}}>
            <h4 style={{color: secondaryTextColor, fontWeight: "bold"}}>HOW TO STAKE WITH XTAKE</h4>
            <Title style={{color: "white"}}>It's as easy as it sounds</Title>
            <h3 style={{color: secondaryTextColor, fontWeight: "normal", paddingBottom: "20px"}}>Staking shouldn’t be difficult. And really, it isn’t. Calculate your staking rewards below.</h3>
        </div>
    )

}