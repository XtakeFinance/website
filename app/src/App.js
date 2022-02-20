import React, {useEffect} from 'react';
import ReactGA from "react-ga4";
import 'antd/dist/antd.css';
import './css/general.css'
import {AppBar} from "./Components/AppBar";
import {AppFooter} from "./Components/AppFooter/AppFooter";
import {AppBody} from "./Components/AppBody";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {ErrorAndInfoComponent} from "./Components/ErrorAndInfo/ErrorAndInfoComponent";
import {appColor, DISCLAIMER_TEXT, MEASUREMENT_ID} from "./AppConstants";
import {Alert} from "antd";

function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    // useEffect(() => {
    //     ReactGA.initialize(MEASUREMENT_ID);
    //     ReactGA.send("pageview");
    // }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <ErrorAndInfoComponent/>
            <AppBar/>
            <AppBody/>
            <AppFooter/>
        </ThemeProvider>
    );
}

export default App;
