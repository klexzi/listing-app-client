import React from "react";
import { storiesOf } from "@storybook/react";

import Listings from "./Listings";
import { ListingProps } from "../Listing/Listing.stories";

const ListingsProps = new Array(20).fill(ListingProps);
const story = storiesOf("Listings ", module);
story.add("Listings", () => <Listings data={ListingsProps} />);
