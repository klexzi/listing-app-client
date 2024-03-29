import React from "react";

import Listing from "../Listing/Listing";
import { Grid } from "@material-ui/core";

function Listings({ loading, data }) {
  if (loading) return <div>loading...</div>;
  // if (error) return <div>an error occurred {error.message}</div>;
  if (data.length < 1) return <div> No listing found</div>;
  return (
    <Grid>
      {data.map((listingData, i) => (
        <Listing key={i} {...listingData} />
      ))}
    </Grid>
  );
}

export default Listings;
