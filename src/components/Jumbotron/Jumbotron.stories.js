import React from "react";
import { storiesOf } from "@storybook/react";
import Jumbotron from "./Jumbotron";

const story = storiesOf("Jumbotron", module);
story.add("Default", () => <Jumbotron />);
