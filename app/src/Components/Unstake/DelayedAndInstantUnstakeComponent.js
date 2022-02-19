import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/List";
import {makeStyles} from "@mui/styles";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

import {StakeUnstakeComponentDivider} from "../Utils/DividerComponent";
import {EmptyComponent} from "../Utils/UtilComponents";
import {setInstantUnstake} from "../../Actions/transactionActions";
import {calculateReturn} from "../../Utils/walletUtils";
import {
    DELAYED_UNSTAKE_FEE,
    DEVICE_DIMENSION,
    IS_CONNECTED,
    STK_AVAX_INPUT,
    UNSTAKE_NOW_FEE,
    UNSTAKE_TYPE
} from "../../Reducers";
import {appColor, borderColor} from "../../AppConstants";


const INSTANT_UNSTAKE_BORDER_COLOR = "INSTANT_UNSTAKE_BORDER_COLOR";
const DELAYED_UNSTAKE_BORDER_COLOR = "DELAYED_UNSTAKE_BORDER_COLOR"

const Colors = {
    [true]: {
        [INSTANT_UNSTAKE_BORDER_COLOR]: appColor,
        [DELAYED_UNSTAKE_BORDER_COLOR]: borderColor
    }, [false]: {
        [INSTANT_UNSTAKE_BORDER_COLOR]: borderColor,
        [DELAYED_UNSTAKE_BORDER_COLOR]: appColor
    }
}

export const appColorLight = "#ff4d4f3f"

const useStyles = makeStyles({
    item: {
        padding: "4%",
        border: `1px solid ${borderColor}`,
        background: "black",
        borderRadius: "10px",
        '&:hover': {
            cursor: "pointer"
        }
    }
})

const CircleTick = () => {
    return (
        <p style={{float: "right"}}><CheckCircleSharpIcon color={"error"}/></p>
    )
}


export const DelayedAndInstantUnstakeComponent = () => {

    const dispatch = useDispatch()
    const unstakeNowFee = useSelector(state => state[UNSTAKE_NOW_FEE])
    const delayedUnstakeFee = useSelector(state => state[DELAYED_UNSTAKE_FEE])
    const instantUnstake = useSelector(state => state[UNSTAKE_TYPE])
    const xAvax = useSelector(state => state[STK_AVAX_INPUT])
    const exchangeRate = useSelector(state => state.exchangeRate)
    const dimensions = useSelector(state => state[DEVICE_DIMENSION])

    const switchColors = (clickedOnInstantUnstake) => {
        if (clickedOnInstantUnstake == instantUnstake) {
            return;
        }
        if (clickedOnInstantUnstake) {
            dispatch(setInstantUnstake(true))
            return
        }
        dispatch(setInstantUnstake(false))
    }


    const classes = useStyles();

    const xs = dimensions['width'] > 640 ? 6 : 12

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={xs}>
                    <Item>
                        <div className={classes.item} style={{
                            borderColor: Colors[instantUnstake][INSTANT_UNSTAKE_BORDER_COLOR]
                        }}
                             onClick={() => switchColors(true)}
                        >
                            {instantUnstake ? <CircleTick/> : <EmptyComponent/>}
                            <p>UNSTAKE NOW</p>
                            {/*<p>&#8776; {calculateReturn(xAvax, unstakeNowFee)} AVAX</p>*/}
                            <p>&#8776; {calculateReturn(xAvax, unstakeNowFee) * exchangeRate} AVAX</p>
                            Unstake Fee: {unstakeNowFee}%
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={xs}>
                    <Item>
                        <div className={classes.item} style={{
                            borderColor: Colors[instantUnstake][DELAYED_UNSTAKE_BORDER_COLOR]
                        }}
                             onClick={() => switchColors(false)}
                        >
                            {!instantUnstake ? <CircleTick/> : <EmptyComponent/>}
                            <p>UNSTAKE IN - 14 DAYS</p>
                            <p>&#8776; {calculateReturn(xAvax, delayedUnstakeFee) * exchangeRate} AVAX</p>
                            Unstake Fee: {delayedUnstakeFee}%
                        </div>
                    </Item>
                </Grid>
            </Grid>
            <StakeUnstakeComponentDivider/>
        </>
    )

}


