import React, {useEffect, useState} from "react";
import {ConnectWalletButton} from "./ConnectWalletButton";
import xtakeBig from '../images/xtakeBig.png';
import xtake from '../images/xtake.png';
import {useDispatch} from "react-redux";
import {setDeviceDimensions} from "../Actions/userDeviceScreenActions";
import {setExchangeRate} from "../Actions/transactionActions";
import {Link} from "@mui/material";

const fullSize = {
    top: 0,
    position: "fixed",
    width: "100%",
    zIndex: "100",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "2%",
    backdropFilter: "blur(10px)"
}


const reducedSize = {
    ...fullSize,
    borderBottom: "1px solid #333333",
    paddingTop: "0%",
    paddingLeft: "2%",
    paddingRight: "2%",
}

export const AppBar = (props) => {
    const [style, setStyle] = useState(reducedSize);
    const [logo, setLogo] = useState(xtakeBig)
    const [dimension, setDimension] = useState({width: "153", height: "68"})
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setExchangeRate(window))
    }, [])

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            if (window.innerWidth <= 840) {
                setStyle(reducedSize)
                setLogo(xtake)
                setDimension({width: "68", height: "68"})
            } else {
                setStyle(fullSize)
                setLogo(xtakeBig)
                setDimension({width: "153", height: "68"})
            }
            dispatch(setDeviceDimensions(window.innerWidth, window.innerHeight))
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }

    // listen for account changes
    window && window.ethereum && window.ethereum.on && window.ethereum.on('accountsChanged', chainChangedHandler);
    window && window.ethereum && window.ethereum.on && window.ethereum.on('chainChanged', chainChangedHandler);

    return (
        <div style={style}>
            <table style={{width: "100%"}}>
                <tr>
                    <td style={{textAlign: "left", verticalAlign: "middle"}}><Link href={"https://xtake.finance/"}><img
                        src={logo} width={dimension.width} height={dimension.height}/></Link></td>
                    <td style={{textAlign: "right"}}>
                        <ConnectWalletButton appBar={true}/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
