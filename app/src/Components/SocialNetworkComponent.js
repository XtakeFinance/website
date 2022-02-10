import React from "react";
import {TripleTextComponent} from "./TripleTextComponent";
import {Space} from "antd";
import {Link} from "@mui/material";
import {faDiscord, faTwitter, faTelegram} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const propsForTripleTextComponent = {
    header: "Connect with us",
    title: "Join our community",
    bottomText: <>Jump right into the Xtake Project.</>
}

export const SocialMediaComponent = ({icon, text, href}) => {
    return (
        <Link target="_blank" href={href}
              underline={"none"}
        >
            <div
                style={{
                    borderRadius: "10px",
                    width: 200,
                    background: "#1A1A1A",
                    textAlign: "center",
                    padding: "10%",
                    border: "1px solid #333333",
                    color: "white"
                }}
            >
                <FontAwesomeIcon size={"lg"} color={"white"} icon={icon}/> &nbsp; {text}
            </div>
        </Link>
    )
}

export const SocialNetworkComponent = () => {

    return (
        <div style={{padding: "5%"}}>
            <TripleTextComponent {...propsForTripleTextComponent} />
            <Space size={'large'} wrap
                   style={{minWidth: "100%", justifyContent: "center", padding: "0%"}}>
                <SocialMediaComponent icon={faTwitter} text={"Twitter"} href={"https://twitter.com/XtakeFinance"}/>
                <SocialMediaComponent icon={faDiscord} text={"Discord"} href={"https://discord.gg/fn3RPVM3Kq"}/>
                <SocialMediaComponent icon={faTelegram} text={"Telegram"} href={"https://t.me/XtakeOfficial"}/>
            </Space>
        </div>
    )

}
