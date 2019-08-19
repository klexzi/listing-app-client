import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import loadable from "@loadable/component";

import Home from "./pages/Home/Home";

const LazyBusinessPage = loadable(() => import("./pages/Business/Business"), {
  fallback: <div>Loading...</div>
});
const LazyLoginPage = loadable(() => import("./pages/Login/Login"), {
  fallback: <div>Loading...</div>
});
const LazyAdminPage = loadable(() => import("./pages/Admin/Admin"), {
  fallback: <div>Loading...</div>
});
const uri =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/graphql"
    : "https://init-listing-api.herokuapp.com/graphql";
const client = new ApolloClient({
  uri
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/business/:id" component={LazyBusinessPage} />
        <Route path="/admin/login" component={LazyLoginPage} />
        <Route path="/admin" component={LazyAdminPage} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
