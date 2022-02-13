import React, {useState} from "react";
import {Input, InputNumber} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {toNumber} from "lodash/lang";
import * as actions from "../../Actions/transactionActions";
import {TextField} from "@mui/material";
import {AVAX_BALANCE} from "../../Reducers";
import avax_logo from "../../images/Avalanche_AVAX_RedWhite.png"
import {appColor} from "../../AppConstants";


export const AvaxInput = () => {

    const dispatch = useDispatch();

    const balance = useSelector(state => state[AVAX_BALANCE])

    const [value, setValue] = useState(0.0);

    const onChangeHandler = (e) => {
        try {
            // console.log(e.target["valueAsNumber"])
            // const avaxToStake = toNumber(e);
            const avaxToStake = toNumber(e.target.value);
            console.log({avaxToStake})
            // dispatch(actions.setAvaxInput(e.target["valueAsNumber"]));
            dispatch(actions.setAvaxInput(avaxToStake));
        } catch (e) {
            console.log("some error")
        }
    }

    return (
        <div style={{background: "black", padding: "5%", borderRadius: "10px"}}>
            <table style={{width: "100%"}}>
                <tr>
                    <td style={{width:"30%"}}><img src={avax_logo} width={"35px"} height={"35px"}/><span style={{fontSize:"large"}}> AVAX</span></td>
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
                    <td colspan="2">Balance: {balance} AVAX <span style={{color: appColor}}>(Max)</span></td>
                </tr>
            </table>
        </div>
    )

    // return (
    //         <div style={{textAlign: "center", paddingBottom:"20px"}}>
    //             <input type="number" style={{width:"100%", backgroundColor:"black", borderColor:"1px solid black"} } />
    //         </div>
    // )

    // return (
    //     <div style={{textAlign: "center", paddingBottom: "20px", color: "white"}}>
    //         <TextField
    //             fullWidth
    //             label="avax"
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

    //
    //     <InputNumber style={{background:"black", width:"100%", color:"white", borderRadius:"7px"}} size={'large'} min={0.0} precision={2} step={0.1} defaultValue={0.0}
    // onChange={onChangeHandler}/>

}