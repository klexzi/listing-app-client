import React from "react";
import { Box, Grid, Typography, Divider, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import ContactDetails from "../ContactDetails/ContactDetails";
import businessDummyLogo from "../../assets/business-logo-dummy.png";

function Listing({
  id,
  name,
  description,
  address,
  images,
  email,
  phone,
  websiteUrl
}) {
  const imageSrc = images.length < 1 ? businessDummyLogo : images[0];
  return (
    <Link to={`/business/${id}`} component={RouterLink} color="textPrimary">
      <Box marginBottom={2}>
        <Divider variant="inset" />
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} sm={2}>
            <Box display="flex" p={2} alignItems="center" height="100%">
              <img
                src={imageSrc}
                alt="business logo"
                width="130"
                height="110"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box display="flex" flexDirection="column" p={2}>
              <Typography variant="h6" align="justify" color="primary">
                {name}
              </Typography>
              <Typography
                variant="subtitle2"
                align="justify"
                gutterBottom
                paragraph
              >
                {address}
              </Typography>
              <Typography
                variant="body2"
                display="block"
                align="justify"
                gutterBottom
              >
                {description}
              </Typography>
              <ContactDetails
                email={email && true}
                phone={phone && true}
                website={websiteUrl && true}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
}

export default Listing;
