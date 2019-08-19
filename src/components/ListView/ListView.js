import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";

import businessDummyLogo from "../../assets/business-logo-dummy.png";
import PhotoList from "../PhotoList/PhotoList";

const LabelAndValue = ({ title, value, valueVariant = "subtitle1" }) => (
  <React.Fragment>
    <Typography variant="overline"> {title}</Typography>
    <Typography variant={valueVariant} paragraph>
      {value}
    </Typography>
  </React.Fragment>
);
const ListView = ({
  name,
  address,
  description,
  phone,
  websiteUrl,
  email,
  images
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={5}>
        <PhotoList
          photos={images.length === 0 ? [businessDummyLogo] : images}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box padding={4}>
          <LabelAndValue
            title="Business Name"
            value={name}
            valueVariant={"h5"}
          />
          <LabelAndValue title="Address" value={address} />
          <LabelAndValue title="Description" value={description} />
          {email && <LabelAndValue title="Phone" value={email} />}
          {phone && <LabelAndValue title="Phone" value={phone} />}
          {websiteUrl && <LabelAndValue title="Phone" value={websiteUrl} />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ListView;
