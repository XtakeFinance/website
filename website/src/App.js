import React, {useEffect} from "react";
import 'antd/dist/antd.css';
import './app.css'

import {RoadMapComponent} from "./Components/RoadMapComponent";
import {Space} from "antd";
import {AppFooter} from "./Components/AppFooter";

// import ComingSoon from "./comin-soon.jpeg"
// import ComingSoon from "./coming soon.jpeg"
// import ComingSoon from "./coming-soon2.webp"
import ComingSoon from "./images/launching-soon.jpg"
import avalanche from './images/Screenshot 2022-02-01 at 8.36.37 PM.png'
import {HeaderComponent} from "./Components/HeaderComponent";
import ReactGA from "react-ga4";
import {MEASUREMENT_ID} from "./AppConstants";
import {DividerComponent} from "./Components/DividerComponent";

function App() {

    useEffect(() => {
        ReactGA.initialize(MEASUREMENT_ID);
        ReactGA.send("pageview");
    }, [])

    return (
        <div style={{background: "black", textAlign: "center"}}>
            <HeaderComponent/>
            <div style={{paddingTop: "110px"}}><img src={ComingSoon} width="300" height="300"/></div>
            {/*<div><img src={logo} width="180" height="80" style={{ position:"fixed", top:30, left:80 }}/></div>*/}
            {/*<HeaderComponent/>*/}
            <Space size={'middle'} wrap
                   style={{minWidth: "100%", justifyContent: "center", padding: "2%", paddingTop: "0%"}}>
                <RoadMapComponent/>
            </Space>
            <div><img src={avalanche} width="216" height="36"/></div>
            <DividerComponent/>
            <AppFooter/>

        </div>
    );
}

export default App;
