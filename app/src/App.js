import React, {useEffect} from 'react';
import ReactGA from "react-ga4";
import 'antd/dist/antd.css';
import './css/general.css'
import {AppBar} from "./Components/AppBar";
import {AppFooter} from "./Components/AppFooter";
import {AppBody} from "./Components/AppBody";
import {createTheme, ThemeProvider} from "@mui/material";
import {ErrorAndInfoComponent} from "./Components/ErrorAndInfoComponent";
import {MEASUREMENT_ID} from "./AppConstants";

function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    useEffect(() => {
        ReactGA.initialize(MEASUREMENT_ID);
        ReactGA.send("pageview");
    }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <ErrorAndInfoComponent/>
            <AppBar/>
            <AppBody/>
            <AppFooter/>
        </ThemeProvider>
    );
}

export default App;
