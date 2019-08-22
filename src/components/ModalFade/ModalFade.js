import React from "react";
import { Fade, Backdrop, Modal, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const ModalFade = ({ open, handleClose, children }) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="Business-Form-Modal"
      aria-describedby="business form modal to update or create listing"
      open={open}
      onClose={handleClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <Box paddingX={5} paddingY={6} width="500px">
            {children}
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default ModalFade;
