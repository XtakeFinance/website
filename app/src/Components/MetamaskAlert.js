import React from "react";
import {useDispatch} from "react-redux";
import {setMetamaskAlert} from "../Actions/walletActions";
import {Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

export const WRONG_NETWORK = "WRONG_NETWORK"
export const METAMASK_NOT_INSTALLED = "METAMASK_NOT_INSTALLED"

const TransitionRight = (props) => {
    return <Slide {...props} direction="left"/>;
}

const errorComponent = {
    [METAMASK_NOT_INSTALLED]: <>Metamask is not installed! <a className={"linkcss"} target="_blank"
                                                              href={"https://metamask.io/"}>Please
        click here to install Metamask.</a></>,
    [WRONG_NETWORK]: <>You are not on the Avalanche test Network</>
}

export const MetamaskAlert = ({type}) => {

    const dispatch = useDispatch()

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = () => {
        dispatch(setMetamaskAlert({error: false, type: ""}))
    }

    return (
        <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            open={true}
            autoHideDuration={60000}
            onClose={handleClose}
            TransitionComponent={TransitionRight}
        >
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {errorComponent[type]}
            </Alert>
        </Snackbar>
    )
}