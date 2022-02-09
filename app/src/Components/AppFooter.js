import React from "react";
import {Footer} from "antd/es/layout/layout";
import {footerText} from "../AppConstants";

export const AppFooter = () => {
    return (
        <>
            <Footer style={{ textAlign: 'center', color:"white", backgroundColor:"black" }}>{footerText}</Footer>
        </>
    )
}