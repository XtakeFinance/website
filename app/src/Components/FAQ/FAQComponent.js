import React from "react";
import {TripleTextComponent} from "../Utils/TripleTextComponent";
import {appColor} from "../../AppConstants";
import {Container, createTheme, Link, ThemeProvider} from "@mui/material";
import {FAQAccordion} from "./FAQAccordion";


const propsForTripleTextComponent = {
    header: "FAQ",
    title: "You're asking the right questions",
    bottomText: <>Click <Link target="_blank" href={"https://twitter.com/XtakeFinance"} underline="hover"
                              style={{color: appColor}}>here</Link> here for more FAQs.</>
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export const FAQComponent = () => {

    return (
        <Container maxWidth={"md"} sx={{padding:"4%"}}>
            <TripleTextComponent {...propsForTripleTextComponent}/>
                <FAQAccordion/>
        </Container>
    )

}