import React from "react";
import { Redirect } from "react-router-dom";

const Admin = () => {
  //TODO:  refactor this next line to be a hoc called protecct route
  const token = localStorage.getItem("token");
  if (!token) return <Redirect to={{ pathname: "/admin/login" }} />;
  return <div>the admin page, not yet done</div>;
};

export default Admin;
