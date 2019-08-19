import React from "react";
import { storiesOf } from "@storybook/react";
import PhotoList from "./PhotoList";

const story = storiesOf("PhotoList", module);

export const PhotoProps = {
  photos: [
    {
      img:
        "https://images.unsplash.com/photo-1566095082419-77dc02ebfe3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      img:
        "https://images.unsplash.com/photo-1468590069246-1d314d8c78bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      img:
        "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ]
};
story.add("Default", () => <PhotoList {...PhotoProps} />);
