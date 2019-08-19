import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import JumboImage from "../../assets/jumbo-image.jpg";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100%",
    background: `url(${JumboImage})`
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "inherit",
    height: "inherit"
  }
});
const WithImageBackground = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} m={0}>
      <Box className={classes.overlay}>{children}</Box>
    </Box>
  );
};

export default WithImageBackground;
