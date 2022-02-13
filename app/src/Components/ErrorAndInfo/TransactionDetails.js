import React from "react";
import {FAILURE, SUCCESS} from "../../Actions/constants";
import * as actions from "../../Actions/transactionActions";
import {useDispatch, useSelector} from "react-redux";
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

import {makeStyles} from '@mui/styles';

import {Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Link} from "@mui/material";
import {IS_STAKING, STK_AVAX_INPUT} from "../../Reducers";
import {appColor} from "../../AppConstants";

const useStyles = makeStyles(theme => ({
    paper: {
        overflowY: 'unset',
    },
    customizedButton: {
        position: 'absolute',
        left: '95%',
        top: '-9%',
        backgroundColor: 'lightgray',
        color: 'gray',
    }
}));

const actionBtn = {
    position: "absolute",
    top: "-27px",
    right: "-25px",
    overflow: "hidden"
}

export const TransactionDetails = ({error, details}) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const isStaking = useSelector(state => state[IS_STAKING])
    const avaxInput = useSelector(state => state.avaxInput)
    const stkAvaxInput = useSelector(state => state[STK_AVAX_INPUT])
    const exchangeRate = useSelector(state => state.exchangeRate)
    const recieveTokens = (exchangeRate) * avaxInput;


    const onCloseSuper = () => {
        dispatch(actions.unsetTransactionDetails());
    }
    const transactionStatus = error ? FAILURE : SUCCESS;

    return (
        <Dialog
            open={true}
            onClose={onCloseSuper}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            style={{textAlign: "center"}}
            // fullWidth={true}
            classes={{paper: classes.paper}}
        >
            {/*<DialogTitle id="alert-dialog-title" color={"white"}>*/}
            {/*    {transactionStatus}*/}
            {/*</DialogTitle>*/}
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div style={{textAlign: "center"}}>
                        {
                            error ?
                                <>
                                    <CloseCircleOutlined style={{fontSize: "75px", color: appColor}}/>
                                    <br/>
                                    <br/>
                                    <div style={{color: "white"}}>Something went wrong</div>
                                    <br/>
                                    <div>{details && details["message"] || ""}</div>
                                </> :
                                <>
                                    <div style={{textAlign: "center"}}>
                                        <CheckCircleOutlined style={{
                                            fontSize: "75px",
                                            color: appColor,
                                            // color: "#00ff73",
                                            strokeWidth: "2",
                                            stroke: "white"
                                        }}/>
                                        <br/>
                                        <br/>
                                        <div style={{fontSize: "16px"}}>
                                            {
                                                isStaking ?
                                                    `${avaxInput} AVAX Successfully Staked`
                                                    :
                                                    `Your request has been received. You will get your ${stkAvaxInput} AVAX within 2 weeks.`
                                            }
                                        </div>
                                        <p style={{fontSize: "12px", paddingTop: "10px", opacity: "0.5"}}>Check the
                                            status of transaction on
                                            Block Explorer</p>
                                        <div><Link underline={"none"}
                                                   target={"_blank"}
                                                   style={{color: appColor, fontSize: "18px", fontWeight: "bold"}}
                                                   href={`https://testnet.snowtrace.io/tx/${details["hash"]}`}>View on
                                            Block
                                            Explorer <FontAwesomeIcon color={appColor} icon={faExternalLinkAlt}/></Link>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions style={actionBtn}>
                <IconButton autoFocus onClick={onCloseSuper} color="primary">
                    <CloseCircleOutlined style={{color:"white"}}/>
                </IconButton>
            </DialogActions>
        </Dialog>
    )

}
