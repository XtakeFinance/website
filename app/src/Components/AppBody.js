import React from "react";
import {Content} from "antd/es/layout/layout";
import {Breadcrumb} from "antd";
import {AppStats} from "./AppStats";
import {StakeUnstakeButtonGroup} from "./StakeUnstakeButtonGroup";
import {StakeUnstakeComponent} from "./StakeUnstakeComponent";
import {Steps} from "./Steps";
import {RoadMapComponent} from "./RoadMapComponent";
import {FAQComponent} from "./FAQ/FAQComponent";
import {HowtoStakeComponent} from "./HowtoStakeComponent";
import {DividerComponent} from "./Utils/DividerComponent";
import {SocialNetworkComponent} from "./SocialNetworkComponent";

export const AppBody = () => {
    return (
        <div style={{paddingTop:"110px"}}>
            <AppStats/>
            <HowtoStakeComponent/>
            <StakeUnstakeButtonGroup/>
            <StakeUnstakeComponent/>
            <Steps/>
            <DividerComponent/>
            <FAQComponent/>
            <DividerComponent/>
            <SocialNetworkComponent/>
            <DividerComponent/>
        </div>
    )
}