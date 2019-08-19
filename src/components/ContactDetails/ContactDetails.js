import React from "react";
import { Box, Icon, Typography } from "@material-ui/core";

const ContactIcon = ({ type }) => (
  <Box display="flex">
    <Icon>{type}</Icon> &nbsp; <Typography>{type}</Typography> &nbsp;&nbsp;
  </Box>
);
const ContactDetails = props => {
  return (
    <Box display="flex">
      <Typography component="span" color="primary" align="center">
        <Box display="flex">
          {props.email ? <ContactIcon type="email" /> : null}
          {props.phone ? <ContactIcon type="phone" /> : null}
          {props.website ? <ContactIcon type="website" /> : null}
        </Box>
      </Typography>
    </Box>
  );
};

export default ContactDetails;
