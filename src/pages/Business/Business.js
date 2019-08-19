import React from "react";
import gql from "graphql-tag";
import ListView from "../../components/ListView/ListView";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Box } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import WithImageBackground from "../../hoc/WithImageBackground/WithImageBackground";

const GET_BUSINESS = gql`
  query Business($id: ID!) {
    business(id: $id) {
      id
      name
      address
      description
      phone
      email
      websiteUrl
      images
    }
  }
`;
const Business = props => {
  const { loading, error, data } = useQuery(GET_BUSINESS, {
    variables: { id: props.match.params.id }
  });
  if (loading) return <div>loading...</div>;
  if (error) return <div>An error occurred</div>;
  console.log(data.business);
  return (
    <Grid>
      <WithImageBackground>
        <Navbar />
      </WithImageBackground>
      <Box marginTop={7}>
        <ListView {...data.business} />
      </Box>
    </Grid>
  );
};

export default Business;
