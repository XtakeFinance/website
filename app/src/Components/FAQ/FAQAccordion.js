import React from "react";

import {withStyles} from '@material-ui/core/styles';
import {ExpandMore} from '@material-ui/icons';


import {AccordionActions, Button, Divider} from '@material-ui/core';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {cardBg, DESKTOP, LAPTOP, MOBILE, secondaryTextColor, TAB} from "../../AppConstants";
import {useSelector} from "react-redux";
import {
    DELAYED_UNSTAKE_FEE,
    DEPOSIT_FEE,
    DEVICE_DIMENSION,
    DEVICE_TYPE,
    REWARDS_FEE,
    UNSTAKE_NOW_FEE
} from "../../Reducers";


const padding = {
    [LAPTOP]: `2% 25% 2% 25%`,
    [DESKTOP]: `2% 30% 2% 30%`,
    [MOBILE]: `2% 2% 2% 2%`,
    [TAB]: `2% 10% 2% 10%`,
}


export const FAQAccordion = () => {

    const {width, height} = useSelector(state => state[DEVICE_DIMENSION])

    // console.log(width, height)
    const deviceType = useSelector(state => state[DEVICE_TYPE])

    // console.log({deviceType})
    // console.log(padding[deviceType])
    // console.log({padding})

    // const padding = Math.max();

    const depositFee = useSelector(state => state[DEPOSIT_FEE]);
    const rewardFee = useSelector(state => state[REWARDS_FEE])
    const delayedUnstakeFee = useSelector(state => state[DELAYED_UNSTAKE_FEE])
    const instantUnstakeFee = useSelector(state => state[UNSTAKE_NOW_FEE])


    return (
        <div style={{minWidth: "100%", justifyContent: "center", }}>
            <Accordion disableGutters elevation={0} sx={{border: "1px solid #333333"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What is Xtake for Avalanche?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: secondaryTextColor}}>
                        Xtake is a fully autonomous, fully transparent algorithmic stake pool on Avalanche. We are
                        committed to unlocking the value of staked AVAX for use in the Avalanche ecosystem, improving
                        staking returns for our users and increasing decentralisation on the Avalanche network.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disableGutters elevation={0} sx={{border: "1px solid #333333"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Why should anybody stake their AVAX with Avalanche?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: secondaryTextColor}}>
                        Staking your AVAX with Xtake earns you the best risk-free yields on Avalanche while being able
                        to participate in other DeFi services and products in the Avalanche network using Xtake's native
                        xAVAX token.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disableGutters elevation={0} sx={{border: "1px solid #333333"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>What is xAVAX?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: secondaryTextColor}}>
                        xAVAX is the native token of Xtake's stake pool. You will get xAVAX in exchange for staking your
                        AVAX with our stake pool. It represents your stake with us and will increase in value as the
                        stake pool accrues staking rewards. These xAVAX can then be used freely across the Avalanche
                        ecosystem (liquidity pools, lending, borrowing, etc.).
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disableGutters elevation={0} sx={{border: "1px solid #333333"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>What fees does Xtake charge?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: secondaryTextColor}}>
                        We charge a one-time deposit fee ({depositFee * 100}% of transaction size), a one-time withdrawal fee (0.3% of transaction size), and an ongoing management fee (~{rewardFee * 100}% of staking rewards). These fees may be subject to change.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )


}