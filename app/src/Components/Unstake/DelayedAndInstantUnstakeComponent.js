import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DELAYED_UNSTAKE_FEE, DEVICE_DIMENSION, STK_AVAX_INPUT, UNSTAKE_NOW_FEE, UNSTAKE_TYPE} from "../../Reducers";
import {StakeUnstakeComponentDivider} from "../Utils/DividerComponent";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/List";
import {makeStyles} from "@mui/styles";
import {appColor, borderColor} from "../../AppConstants";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import {EmptyComponent} from "../Utils/UtilComponents";
import {Typography} from "@mui/material";
import {setInstantUnstake} from "../../Actions/transactionActions";
import {calculateReturn} from "../../Utils/walletUtils";

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
    // console.log({unstakeNowFee, delayedUnstakeFee})
    // const [instantUnstake, setInstantUnstake] = useState(true)
    // const [bgColor, switchBgColor] = useState({instant: appColor, delayed: "black"});

    const switchColors = (clickedOnInstantUnstake) => {
        if (clickedOnInstantUnstake == instantUnstake) {
            return;
        }
        if (clickedOnInstantUnstake) {
            // setInstantUnstake(true)
            dispatch(setInstantUnstake(true))
            // switchBgColor({instant: appColor, delayed: "black"})
            return
        }
        dispatch(setInstantUnstake(false))
        // setInstantUnstake(false)
        // switchBgColor({instant: "black", delayed: appColor})
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
                            <p>&#8776; {calculateReturn(xAvax, 1.65) * exchangeRate} AVAX</p>
                            Unstake Fee: from 0.3%
                            {/*Unstake Fee: {unstakeNowFee}%*/}
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


/*


                <Grid item xs={xs}>
                    <Item>
                        <div className={classes.item} style={{
                            background: bgColor["instant"]
                        }}
                             onClick={() => switchColors(true)}
                        >
                            {instantUnstake ? <CircleTick/> : <EmptyComponent/>}
                            <p>UNSTAKE NOW</p>
                            <p>0 AVAX</p>
                            Unstake Fee: 0%
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={xs}>
                    <Item>
                        <div className={classes.item} style={{
                            background: bgColor["delayed"]
                        }}
                             onClick={() => switchColors(false)}
                        >
                            {!instantUnstake ? <CircleTick/> : <EmptyComponent/>}
                            <p>UNSTAKE IN - 14 DAYS</p>
                            <p>0 AVAX</p>
                            Unstake Fee: 0%
                        </div>
                    </Item>
                </Grid>


* */

