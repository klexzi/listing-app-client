import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { Grid, Box } from "@material-ui/core";

import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Listings from "../../components/Listings/Listings";

const GET_LISTINGS = gql`
  query Businesses($q: String) {
    businesses(q: $q) {
      id
      name
      views
      images
      phone
      email
      websiteUrl
      description
      categories {
        id
        title
      }
    }
  }
`;
const Home = () => {
  const [listings, setListings] = useState([]);
  const [getData, { loading, data }] = useLazyQuery(GET_LISTINGS, {
    onCompleted: data => {
      console.log(data);

      return setListings(data.businesses);
    }
  });
  useEffect(() => {
    getData({ variables: { q: "" } });
  }, [getData]);
  const handleSearch = q => {
    getData({ variables: { q } });
  };
  return (
    <Grid>
      <Jumbotron handleSearch={handleSearch} />
      <Box marginTop={5}>
        <Grid container direction="row" justify="center">
          <Grid item xs={12} sm={8}>
            <Listings data={listings} loading={loading} />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Home;
