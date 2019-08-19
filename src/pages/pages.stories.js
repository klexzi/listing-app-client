import React from "react";
import { storiesOf } from "@storybook/react";
import Home from "./Home/Home";

const story = storiesOf("Pages", module);

story.add("Home", () => <Home />);
