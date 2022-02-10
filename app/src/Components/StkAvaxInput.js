import React from "react";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../Actions/transactionActions";
import {toNumber} from "lodash/lang";
import {Input, InputNumber} from "antd";
import xavax_logo from "../images/xtake.png";
import {appColor} from "../AppConstants";
import {STK_AVAX_BALANCE} from "../Reducers";

export const StkAvaxInput = () => {

    const dispatch = useDispatch();

    const balance = useSelector(state => state[STK_AVAX_BALANCE])


    const onChangeHandler = (e) => {
        try {
            // const stkAvaxToReedem = toNumber(e.target["valueAsNumber"]);
            const stkAvaxToReedem = toNumber(e.target.value);
            dispatch(actions.setStkAvaxInput(stkAvaxToReedem));
        } catch (e) {
            console.log("some error")
        }
    }

    return (
        <div style={{background: "black", padding: "5%", borderRadius: "10px"}}>
            <table style={{width: "100%"}}>
                <tr>
                    <td style={{width: "30%"}}><img src={xavax_logo} width={"35px"} height={"35px"}/><span
                        style={{fontSize: "large"}}> xAVAX</span></td>
                    <td>
                        <Input placeholder={"0.0"}
                               style={{
                                   background: "black",
                                   width: "100%",
                                   color: "white",
                                   borderRadius: "7px",
                                   borderColor: "black",
                                   textAlign: "right",
                                   fontSize: "24px"
                               }}

                               onChange={onChangeHandler}
                               inputMode={"numeric"}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">Balance: {balance} xAVAX <span style={{color: appColor}}>(Max)</span></td>
                </tr>
            </table>
        </div>
    )

    // return (
    //     <div style={{textAlign: "center", paddingBottom:"20px"}}>
    //         <InputNumber style={{background:"black", width:"100%", color:"white", borderRadius:"7px"}} size={'large'} min={0.0} precision={2} step={0.1} defaultValue={0.0}
    //                      onChange={onChangeHandler}/>
    //     </div>
    // )

    // return (
    //     <div style={{textAlign: "center", paddingBottom: "20px", color: "white"}}>
    //         <TextField
    //             fullWidth
    //             label="stkAvax"
    //             id="fullWidth"
    //             size="small"
    //             type="number"
    //             color={"error"}
    //             InputProps={{ inputProps: { min: 0.0, step:0.1, defaultValue:0.0, color:"white",  } }}
    //             sx={{ input: { color: 'white' } }}
    //             onChange={onChangeHandler}
    //         />
    //     </div>
    //
    // )

}