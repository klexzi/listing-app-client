import React from "react";
import { storiesOf } from "@storybook/react";
import LoginForm from "./LoginForm";

const story = storiesOf("LoginForm", module);

story.add("Default", () => <LoginForm />);
