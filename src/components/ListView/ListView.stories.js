import React from "react";
import { storiesOf } from "@storybook/react";

import { ListingProps } from "../Listing/Listing.stories";
import ListView from "./ListView";

const story = storiesOf("ListView", module);

story.add("Default", () => <ListView {...ListingProps} />);
