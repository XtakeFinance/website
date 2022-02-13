import React, {useState} from "react";
import {Divider, Space} from "antd";
import {useSelector} from "react-redux";
import {DEVICE_DIMENSION, STK_AVAX_INPUT} from "../../Reducers";

export const appColorLight = "#ff4d4faf"


export const DelayedAndInstantUnstakeComponent = () => {

    const xAvax = useSelector(state => state[STK_AVAX_INPUT])
    const dimensions = useSelector(state => state[DEVICE_DIMENSION])

    const [bgColor, switchBgColor] = useState({instant: appColorLight, delayed: "black"});

    const switchColors = () => {
        if(bgColor["instant"] == appColorLight) {
            switchBgColor({instant: "black", delayed: appColorLight})
            return
        }
        switchBgColor({instant: appColorLight, delayed: "black"})
    }

    console.log({
        xAvax, dimensions
    })

    if (dimensions["width"] >= 900) {
        return (<>
                <Space
                    wrap
                    size={"middle"}
                    style={{
                        textAlign: "left",
                        width: "100%"
                    }}
                >
                    <div style={{
                        background: bgColor["instant"], padding: "5%", borderRadius: "10px", width: "50%"
                    }}
                         onClick={switchColors}
                    >

                        <p>UNSTAKE NOW</p>
                        <p>UNSTAKE NOW</p>
                        UNSTAKE NOW
                    </div>
                    <div style={{
                        background: bgColor["delayed"], padding: "5%", borderRadius: "10px", width: "50%"
                    }}
                         onClick={switchColors}
                    >

                        <p>UNSTAKE IN - 14 DAYS</p>
                        <p>UNSTAKE IN - 14 DAYS</p>
                        UNSTAKE IN - 14 DAYS
                    </div>
                </Space>
                <Divider orientation="left" plain style={{color: "white", borderColor: "#333333"}}/>
            </>)
    }

    return (<>
            <div style={{
                background: bgColor["instant"], padding: "5%", borderRadius: "10px"
            }}
                 onClick={switchColors}
            >
                <p>UNSTAKE NOW</p>
                <p>UNSTAKE NOW</p>
                UNSTAKE NOW
            </div>
            <br/>
            <div style={{
                background: bgColor["delayed"], padding: "5%", borderRadius: "10px"
            }}
                 onClick={switchColors}
            >
                <p>UNSTAKE IN - 14 DAYS</p>
                <p>UNSTAKE IN - 14 DAYS</p>
                UNSTAKE IN - 14 DAYS
            </div>
            <Divider orientation="left" plain style={{color: "white", borderColor: "#333333"}}/>
        </>)

}