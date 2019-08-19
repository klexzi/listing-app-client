import React, { useState } from "react";
import { Grid, SnackbarContent, Snackbar } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import gql from "graphql-tag";
import { Redirect } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;
const useStyles = makeStyles({
  error: {
    backgroundColor: red[700]
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: "8px"
  }
});

const ErrorSnackBar = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open);
  const classes = useStyles();
  const onClose = () => setIsOpen(!isOpen);
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <SnackbarContent
        className={classes.error}
        aria-describedby="error-snackbar"
        message={
          <span id="error-snackbar" className={classes.error}>
            <ErrorIcon className={classes.icon} />
            Unable to login, Check Email and Password
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};
const Login = props => {
  const [signIn, { loading, error, data }] = useMutation(SIGN_IN);

  const handleSubmit = ({ email, password }) => {
    signIn({
      variables: {
        email,
        password
      }
    });
  };
  if (data && data.signIn) {
    localStorage.setItem("token", data.signIn.token);
    return (
      <Redirect
        to={{
          pathname: "/admin"
        }}
      />
    );
  }
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid>
        <LoginForm isLoading={loading} handleSubmit={handleSubmit} />
      </Grid>
      {error && <ErrorSnackBar open={error ? true : false} />}
    </Grid>
  );
};

export default Login;
