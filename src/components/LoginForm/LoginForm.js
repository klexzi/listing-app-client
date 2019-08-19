import React from "react";
import { Box, Paper, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Box>
      <Paper>
        <form className={classes.container}>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
