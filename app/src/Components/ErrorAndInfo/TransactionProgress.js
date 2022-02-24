import React from "react";
import {Backdrop, CircularProgress, Stack} from "@mui/material";
import {Typography} from "antd";

const TRANSACTION_IN_PROGRESS = "Transaction in progress..."

export const TransactionProgress = () => {

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <Stack gap={1} justifyContent="center" alignItems="center">
                <CircularProgress color="error" />
                <Typography style={{color:"white"}}>{TRANSACTION_IN_PROGRESS}</Typography>
            </Stack>
        </Backdrop>
    )

}