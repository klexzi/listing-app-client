import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  makeStyles,
  Typography,
  Button,
  CircularProgress
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    height: "100%",
    maxWidth: "400px",
    padding: "20px 10px 20px 10px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    margin: "20px 0 20px 0"
  },
  progress: {
    position: "relative",
    left: 100,
    color: grey[600]
  }
}));

const LoginForm = ({ handleSubmit: submitForm, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const handleSubmit = e => {
    e.preventDefault();
    submitForm({ email, password });
  };
  return (
    <Box>
      <Paper className={classes.root}>
        <Typography variant="h5" align="center" color="primary">
          Login
        </Typography>
        <form className={classes.container} onSubmit={handleSubmit}>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            name="password"
            margin="normal"
            variant="outlined"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button
            className={classes.textField}
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            disabled={isLoading}
          >
            Login
            {isLoading && (
              <CircularProgress className={classes.progress} size={24} />
            )}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
