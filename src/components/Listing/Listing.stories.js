import React from "react";
import { storiesOf } from "@storybook/react";
import Listing from "./Listing";

export const ListingProps = {
  title: "Jay Cube",
  address: "Shop 20, King Jaja Complex Unilag, Lagos, Nigeria., Lagos, Lagos",
  description: `Bolicious and grill is here with somethinhlg unusual,we do roasted plantain and grill fish, asun and suya, BBQ and chops all this we serve at events and parties,takeaway point as well as office and ho`,
  images: [
    "https://images.unsplash.com/photo-1566095082419-77dc02ebfe3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  ],
  phone: "089434343434",
  email: "jaycuby@mail.com",
  website: "www.jaycuby.com"
};
const story = storiesOf("Listing Component", module);
const containWidth = storyFn => (
  <div style={{ width: "600px" }}> {storyFn()}</div>
);
story.addDecorator(containWidth);
story.add("Default", () => <Listing {...ListingProps} />);
