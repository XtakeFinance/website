import React from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, Snackbar} from "@mui/material";
import {Alert} from "antd";
import MuiAlert from "@mui/material/Alert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const Disclaimer = () => {
  const [open, setOpen] = React.useState(true);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref}  {...props} />;
    });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(true);
  };

  // return (
  //       <Dialog
  //           open={open}
  //           keepMounted
  //           onClose={handleClose}
  //           aria-describedby="alert-dialog-slide-description"
  //       >
  //         <DialogContent>
  //           <DialogContentText id="alert-dialog-slide-description">
  //             This is testnet-v0.1 launch. Bugs and issues are expected.
  //             The contract addresses might change at any time to fix bugs, which might result in users losing their xAVAX tokens.
  //             Please be aware that testnet xAVAX tokens hold no value. It is purely for testing purposes.
  //             We will stabilize the testnet over next couples of weeks.
  //           </DialogContentText>
  //         </DialogContent>
  //         <DialogActions>
  //           <Button color={"error"} variant={"outlined"} onClick={handleClose}>OK</Button>
  //         </DialogActions>
  //       </Dialog>
  // );

  return (
      <Snackbar
          open={open}
          anchorOrigin={{vertical: 'top', horizontal: 'left'}}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            This is testnet-v0.1 launch. Bugs and issues are expected.
            The contract addresses might change at any time to fix bugs, which might result in users losing their xAVAX tokens.
            Please be aware that testnet xAVAX tokens hold no value. It is purely for testing purposes.
            We will stabilize the testnet over next couples of weeks.
        </Alert>
      </Snackbar>
  )

}