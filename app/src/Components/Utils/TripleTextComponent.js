import React from "react";
import {secondaryTextColor} from "../../AppConstants";
import Title from "antd/lib/typography/Title";

export const TripleTextComponent = ({header, title, bottomText}) => {

    return (
        <div style={{textAlign: "center"}}>
            <h4 style={{color: secondaryTextColor, fontWeight: "bold"}}>{header}</h4>
            <Title style={{color: "white"}}>{title}</Title>
            <h3 style={{color: secondaryTextColor, fontWeight: "normal", paddingBottom: "20px"}}>{bottomText}</h3>
        </div>
    )

}