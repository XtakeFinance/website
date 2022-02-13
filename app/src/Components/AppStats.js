import React from "react";
import {Space} from "antd";
import Text from "antd/es/typography/Text";

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import xtake from './../images/xtake.png'
import avax from './../images/Avalanche_AVAX_RedWhite.png'
import {useSelector} from "react-redux";
import {DEVICE_TYPE} from "../Reducers";
import {DESKTOP, LAPTOP, MOBILE, TAB} from "../AppConstants";

const COMING_SOON = "Coming Soon...";

const XtakeApyIcon = <img src={xtake} width={"35px"} height={"35px"}/>
const TVLIcon = <MonetizationOnIcon fontSize={"large"} color={'error'}/>
const AvaxIcon = <img src={avax} width={"30px"} height={"30px"}/>

const spaceSize = {
    [TAB] : "middle",
    [MOBILE] : "small",
    [DESKTOP] : "large",
    [LAPTOP] : "large"
}

export const CardComponent = ({header, subtext, icon}) => {
    return (<div
            style={{
                borderRadius: "10px",
                width: 225,
                background: "#1A1A1A",
                padding: "5%",
                border: "1px solid #333333"
            }}
        >
            <table>
                <tr>
                    {/*<td style={{paddingRight:"5px"}}><MonetizationOnIcon fontSize={"large"} color={'error'}/></td>*/}
                    <td style={{paddingRight:"5px"}}>{icon}</td>
                    <td><Text level={4} style={{color: "#B3B3B3"}}>{header}</Text><br/>
                        <Text level={4} style={{color: "white"}}>{subtext}</Text></td>
                </tr>
            </table>
        </div>)
}

export const AppStats = () => {

    const deviceType = useSelector(state => state[DEVICE_TYPE])

    return (<Space size={spaceSize[deviceType]} wrap
                   style={{minWidth: "100%", justifyContent: "center", padding: "2%", paddingTop: "1%"}}>
            <CardComponent header={"Total value locked"} subtext={COMING_SOON} icon={TVLIcon}/>
            <CardComponent header={"Xtake's APY"} subtext={"9.72%"} icon={XtakeApyIcon}/>
            <CardComponent header={"Total AVAX Staked"} subtext={COMING_SOON} icon={AvaxIcon}/>
        </Space>)


}