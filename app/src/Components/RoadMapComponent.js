import React from "react";
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {Timeline} from "antd";
import Title from "antd/lib/typography/Title";
import {appColor, secondaryTextColor} from "../AppConstants";
import {Link} from "@mui/material";


export const RoadMapComponent = () => {
    return (
        <div style={{textAlign: "center", paddingTop:"80px"}}>
            <h4 style={{color: secondaryTextColor, fontWeight:"bold"}}>ROADMAP</h4>
            <Title style={{color: "white"}}>It only gets better from here</Title>
            <h3 style={{color:secondaryTextColor, fontWeight:"normal", paddingBottom: "20px"}}>Follow us on
                <Link target="_blank" href={"https://twitter.com/XtakeFinance"} underline="hover" style={{color:appColor}}> Twitter </Link>
                and
                <Link target="_blank" href={"https://discord.com/channels/@me/871435939048751105/938007030617219093"} underline="hover" style={{color:appColor}}> Discord</Link> to keep up with our latest features and launches.</h3>
            <Timeline>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <span style={{color: secondaryTextColor, fontWeight:"lighter"}}>Feb'22</span>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={{color:"green", background:"#00ff00"}} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <span style={{color: secondaryTextColor, fontWeight:"lighter"}}><del>First Liquid Staking<br/> solution on Avalanche</del></span>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <span style={{color: secondaryTextColor, fontWeight:"lighter"}}>Feb'22</span>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={{color:"green", background:"#00ff00"}}/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <span style={{color: secondaryTextColor, fontWeight:"lighter"}}><del>Testnet launch</del></span>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <span style={{color: secondaryTextColor, fontWeight:"lighter"}}>Mar'22</span>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <span style={{color: secondaryTextColor, fontWeight:"lighter"}}>Audit and Testing</span>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <span style={{color: secondaryTextColor, fontWeight:"lighter"}}>Apr'22</span>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <span style={{color: secondaryTextColor, fontWeight:"lighter"}}>Defi and Wallet Integration</span>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}