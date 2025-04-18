import * as React from 'react';
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";


interface SnackbarErrorProps {
  open: boolean;
  handleClose: () => void;
  content: string;
}

const SnackbarError = (props: SnackbarErrorProps) => {
  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
      <Alert onClose={props.handleClose} severity="success" sx={{width: '100%'}}>
        props.content
      </Alert>
    </Snackbar>
  )
}

export default SnackbarError;