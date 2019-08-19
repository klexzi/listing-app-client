import React from "react";
import { Box, Typography } from "@material-ui/core";

import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import useStyles from "./Jumbotron.css";
import WithImageBackground from "../../hoc/WithImageBackground/WithImageBackground";

const Jumbotron = ({ handleSearch }) => {
  const classes = useStyles();
  return (
    <WithImageBackground>
      <Navbar />
      <Box
        className={classes.container}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        marginBottom={10}
      >
        <Box p={2}>
          <Typography
            variant={"h2"}
            component="h2"
            align="center"
            className={classes.subHeadline}
            paragraph
          >
            Inits Business Listing
          </Typography>
        </Box>

        <Search handleSearch={handleSearch} />
      </Box>
    </WithImageBackground>
  );
};

export default Jumbotron;
