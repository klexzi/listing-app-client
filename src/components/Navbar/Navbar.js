import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "40px 0 0 40px"
  },
  pageTitle: {
    fontFamily: "Consolas",
    color: grey[200]
  }
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      display="flex"
      marginBottom={7}
      marginLeft={7}
      width="75%"
    >
      <Typography variant="h5" className={classes.pageTitle}>
        Inits Listing
      </Typography>
    </Box>
  );
};

export default Navbar;
