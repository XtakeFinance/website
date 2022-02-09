import React, {useEffect, useState} from "react";

// import ComingSoon from './../launching-soon.jpg'
// import ComingSoon from './../coming-soon2.webp'
// import ComingSoon from './../comin-soon.jpeg'
import xtakeBig from '../images/xtakeBig.png'
import xtake from '../images/xtake.png'

import {Link} from "@mui/material";

const fullSize={
    top: 0,
    position: "fixed",
    width: "100%",
    zIndex: "100",
    // backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundColor: "rgba(0, 0, 0)",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "2%",
    // borderBottom:"1px solid #333333"
}


const reducedSize={
...fullSize,
    borderBottom:"1px solid #333333",
    paddingTop: "0%",
    paddingLeft: "2%",
    paddingRight: "2%",
}


export const HeaderComponent = () => {

    const [style, setStyle] = useState(reducedSize);
    const [logo, setLogo] = useState(xtakeBig)
    const [dimension, setDimension] = useState({width: "153", height:"68"})

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            if(window.innerWidth <= 840) {
                setStyle(reducedSize)
                setLogo(xtake)
                setDimension({width: "68", height:"68"})
                return
            }
            setStyle(fullSize)
            setLogo(xtakeBig)
            setDimension({width: "153", height:"68"})        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return (
        <div style={style}>
            <table style={{width: "100%", color: "white"}}>
                <tr>
                    <td style={{textAlign:"left",verticalAlign: "middle"}}><img src={xtakeBig} width={153} height={68}/></td>
                    <td style={{textAlign:"right"}}>
                        <Link target="_blank" href={"https://testnet.xtake.finance/"}><button
                            className={'click'}
                            style={{borderRadius: '5px',
                                backgroundColor:"#e23c34",
                                border: "none",
                                padding: "10px 25px",
                                fontSize: "16px",
                                color:"white"
                            }}
                        >
                            Try testnet
                        </button></Link>
                    </td>
                </tr>
            </table>
        </div>
    )


    // return (
    //
    //         <table style={{width: "100%", color:"white", padding:"0%"}}>
    //             <tr>
    //                 <td style={{verticalAlign:"middle"}} ><img src={logo} width="100" height="100"/></td>
    //                 <td><img src={ComingSoon} width="300" height="300"/></td>
    //                 <td><img src={avalanche} width="256" height="128"/></td>
    //             </tr>
    //         </table>
    // )

    // return (
    //
    //     <Space size={'middle'} wrap
    //            style={{minWidth: "100%", justifyContent: "center", padding: "2%", paddingTop: "1%"}}>
    //         <img src={logo} width="100" height="100"/>
    //         <img src={ComingSoon} width="300" height="300"/>
    //         <img src={avalanche} width="256" height="128"/>
    //     </Space>
    // )

}