import React from "react";
import {useDispatch} from "react-redux";
import {setMetamaskAlert} from "../../Actions/walletActions";
import {Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import {findErrorMessage} from "../../Utils/messageUtils";

const TransitionRight = (props) => {
    return <Slide {...props} direction="left"/>;
}

export const MetamaskAlert = ({type, amount, vertical, horizontal}) => {

    const dispatch = useDispatch()

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant={"standard"} {...props} />;
    });

    const handleClose = () => {
        dispatch(setMetamaskAlert({error: false, type: ""}))
    }

    console.log({type, amount, vertical, horizontal})

    return (
        <Snackbar
            anchorOrigin={{vertical: vertical || 'bottom', horizontal: horizontal || 'right'}}
            open={true}
            autoHideDuration={60000}
            onClose={handleClose}
            TransitionComponent={TransitionRight}
        >
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {findErrorMessage(type, amount)}
            </Alert>
        </Snackbar>
    )
}