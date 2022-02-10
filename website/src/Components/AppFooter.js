import React, {useState} from "react";
import {Footer} from "antd/es/layout/layout";
import {footerAbout} from "../AppConstants";
import xtakeBig from '../images/xtakeBig.png';
import {Column, ColumnAbout, FooterLink, Heading,} from "./AppFooterStyles";
import {Link} from "@mui/material";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/List';

export const AppFooter = () => {
    const [logo, setLogo] = useState(xtakeBig)
    const [dimension, setDimension] = useState({width: "153", height: "68"})

    return (
        <Footer style={{ flexGrow: 1, textAlign: 'left', color:"white", backgroundColor:"black" }}>
            <Grid container spacing={2} columns={16}>
                <Grid item md={7}>
                    <ColumnAbout>
                        <Item><Link href={"https://xtake.finance/"}><img
                                src={logo} width={dimension.width} height={dimension.height}/></Link></Item>
                        <Item>{footerAbout}</Item>
                    </ColumnAbout>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Column>
                        <Heading>Products</Heading>
                        <FooterLink href="https://testnet.xtake.finance/">AVAX Stake Pool</FooterLink>
                        <FooterLink href="https://docs.xtake.finance/guides/what-is-xavax">xAVAX Token</FooterLink>
                        <FooterLink href="https://docs.xtake.finance/xtake-finance/the-xtk-token">XTK Token</FooterLink>
                    </Column>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Column>
                        <Heading>Community</Heading>
                        <FooterLink href="https://twitter.com/XtakeFinance">Twitter</FooterLink>
                        <FooterLink href="https://discord.gg/fn3RPVM3Kq">Discord</FooterLink>
                        <FooterLink href="https://t.me/XtakeOfficial">Telegram</FooterLink>
                        <FooterLink href="https://xtake.medium.com/">Medium</FooterLink>
                    </Column>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Column>
                        <Heading>Learn</Heading>
                        <FooterLink href="https://docs.xtake.finance/">Docs</FooterLink>
                        <FooterLink href="https://docs.xtake.finance/xtake-finance/roadmap">Roadmap</FooterLink>
                        <FooterLink href="https://docs.xtake.finance/xtake-finance/litepaper">Litepaper</FooterLink>
                        <FooterLink href="https://docs.xtake.finance/information/faq#where-can-i-use-xavax">DeFi integrations</FooterLink>
                        <FooterLink href="https://docs.xtake.finance/xtake-finance/disclaimer">Terms of use</FooterLink>
                    </Column>
                </Grid>
            </Grid>
        </Footer>
    );
};