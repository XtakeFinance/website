import React from "react";
import {
    Backdrop,
    Box,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Stack
} from "@mui/material";
import {Button, Typography} from "antd";

export const TransactionProgress = () => {

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <Stack gap={1} justifyContent="center" alignItems="center">
                <CircularProgress color="error" />
                <Typography style={{color:"white"}}>Transaction in progres...</Typography>
            </Stack>
        </Backdrop>
    )

}