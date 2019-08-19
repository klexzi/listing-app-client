import React from "react";
import { storiesOf } from "@storybook/react";
import Search from "./Search";

const story = storiesOf("Search", module);
story.add("Default", () => <Search />);
