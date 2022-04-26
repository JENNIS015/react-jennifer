import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
const GET_CATEGORIES = gql`query {
    productCategories(first: 3) {
      nodes {
        id
        slug
        image {
          sourceUrl
          altText
        }
        name
      }
    }
  }`;

export default GET_CATEGORIES;