import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../Actions/transactionActions";
import {toNumber} from "lodash/lang";
import {Input} from "antd";
import xavax_logo from "../../images/xtake.png";
import {MIN_UNSTAKE_AMOUNT, STK_AVAX_BALANCE} from "../../Reducers";
import {Button} from "@mui/material";
import {AppToolTip} from "../Utils/AppToolTip";

const contract_address = <p>Import the following address if not already imported in your metamask wallet to see xAVAX: <br/> 0x9C83e39fF8c666A0737330e0da6e135d8A2D91a1</p>

export const StkAvaxInput = () => {

    const dispatch = useDispatch();

    const balance = useSelector(state => state[STK_AVAX_BALANCE])
    const minUntakeAmount = useSelector(state => state[MIN_UNSTAKE_AMOUNT])
    const [value, setValue] = useState('');

    const onChangeHandler = (e) => {
        try {
            // const stkAvaxToReedem = toNumber(e.target["valueAsNumber"]);
            setValue(e.target.value)
            const stkAvaxToReedem = toNumber(e.target.value); // check whether it is a valid number or not
            // console.log({stkAvaxToReedem})
            dispatch(actions.setStkAvaxInput(e.target.value));
        } catch (e) {
            console.log("some error")
        }
    }

    const maxHandler = () => {
        dispatch(actions.setStkAvaxInput(balance));

        setValue(balance)

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
                               value={value}
                               onChange={onChangeHandler}
                               inputMode={"numeric"}
                        />
                    </td>
                </tr>
                <tr>
                    <td onClick={maxHandler} colSpan="2">Balance: {balance} xAVAX <AppToolTip text={contract_address}/><Button color={"error"}
                                                                                         variant={"text"}>(Max)</Button>
                    </td>
                </tr>
            </table>
        </div>
    )

}