import React from "react";
import { storiesOf } from "@storybook/react";
import Home from "./Home/Home";
import Login from "./Login/Login";

const story = storiesOf("Pages", module);

story.add("Home", () => <Home />);
story.add("Login", () => <Login />);
