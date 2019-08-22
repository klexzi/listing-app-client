import gql from "graphql-tag";

export const GET_LISTINGS = gql`
  query Businesses($q: String) {
    businesses(q: $q) {
      id
      name
      address
      views
      phone
      email
      images
      description
      categories {
        id
        title
      }
    }
  }
`;
export const CREATE_LISTING = gql`
  mutation CreateListing(
    $name: String!
    $description: String!
    $phone: String
    $categories: [String!]!
    $images: [String!]
    $email: String
    $websiteUrl: String
    $address: String
  ) {
    createListing(
      body: {
        name: $name
        description: $description
        phone: $phone
        categories: $categories
        images: $images
        address: $address
        email: $email
        websiteUrl: $websiteUrl
      }
    ) {
      id
      name
      description
      phone
      images
      address
      email
      categories {
        id
        title
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      title
    }
  }
`;
