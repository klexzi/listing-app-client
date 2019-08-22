import React from "react";
import { Box, Icon } from "@material-ui/core";

const AddedImage = ({ src, removeImage, index }) => {
  return (
    <Box
      width="80px"
      height="80px"
      paddingX={1}
      marginTop={1}
      position="relative"
    >
      <img src={src} alt="added" width="100%" height="100%" />
      <Box position="absolute" right={0} top={-11} component="div">
        <Icon onClick={() => removeImage(index)} color="action">
          cancel
        </Icon>
      </Box>
    </Box>
  );
};

export default AddedImage;
