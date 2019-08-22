import React from "react";
import { Redirect } from "react-router-dom";
import { checkLoginStatus } from "../../helpers/utils";

const ProtectPage = Component => props => {
  const isLoggedIn = checkLoginStatus();
  if (!isLoggedIn) return <Redirect to={{ pathname: "/admin/login" }} />;
  return <Component {...props} />;
};

export default ProtectPage;
