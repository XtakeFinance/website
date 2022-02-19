import React, {useEffect, useState} from "react";
import {Footer} from "antd/es/layout/layout";
import {footerAbout, footerText, stkAVAXContractABI, stkAVAXContractAddress} from "../../AppConstants";
import xtakeBig from '../../images/xtakeBig.png';
import {
    Column,
    FooterLink,
    Heading,
} from "./AppFooterStyles";
import {Link} from "@mui/material";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/List';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ethers} from "ethers";
import {bigNumberToEther} from "../../Utils/ethersUtils";

export const AppFooter = () => {
    const [logo, setLogo] = useState(xtakeBig)
    const [dimension, setDimension] = useState({width: "153", height: "68"})

    const fetchData = async () => {
        const NODE_URL = "https://speedy-nodes-nyc.moralis.io/222dada6a915af81b865c7e0/avalanche/testnet"
        const provider = new ethers.providers.JsonRpcProvider(NODE_URL)
        const signer = provider.getSigner();
        const balance = bigNumberToEther(await provider.getBalance("0x783796aE2A244Cf4B18FA6f11605740E99ee2Fb4"))
        const xAvaxContract = new ethers.Contract(stkAVAXContractAddress, stkAVAXContractABI, provider)
        const xAvaxBalance = bigNumberToEther(await xAvaxContract.balanceOf("0x783796aE2A244Cf4B18FA6f11605740E99ee2Fb4"))
        console.log({xAvaxBalance})
    }

    useEffect(()=>{
        // fetchData()
    })

    return (
        <Footer style={{ flexGrow: 1, textAlign: 'left', color:"white", backgroundColor:"black" }}>
            <Grid container spacing={2} columns={16}>
                <Grid item md={7}>
                    <Column>
                        <Item><Link href={"https://xtake.finance/"}><img
                                src={logo} width={dimension.width} height={dimension.height}/></Link></Item>
                        <Item>{footerAbout}</Item>
                    </Column>
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