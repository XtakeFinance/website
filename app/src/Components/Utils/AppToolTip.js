import React from "react";
import {InfoCircleOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import {Tooltip} from "@mui/material";
import {secondaryTextColor} from "../../AppConstants";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const AppToolTip = ({text}) => {

    return (
        <Tooltip placement={'right-end'} arrow={true} title={<h3 style={{color:"white"}}>{text}</h3>}>
            <InfoCircleOutlined style={{color:"#808080af"}}/>
            {/*<InfoOutlinedIcon color={"disabled"} fontSize={"small"}/>*/}
        </Tooltip>
    )

}