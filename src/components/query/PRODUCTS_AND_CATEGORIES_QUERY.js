import {gql} from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_AND_CATEGORIES_QUERY = gql `
  query {heroCarousel: productCategories(where: {slug: "offers"}) {
    nodes {
      id
      children {
        nodes {
          id
          name
          slug
          databaseId
          description
          image {
            id
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
 
    products(first: 20) {
      nodes {
        id
        databaseId
        averageRating
        slug
        description
        image {
          id
          altText
          sourceUrl
        }
        name
        ... on SimpleProduct  {
          price(format: RAW)
          regularPrice(format: RAW)
          id
          stockQuantity
          stockStatus

 
     
        }
      }
    }
  }
`;

export default PRODUCTS_AND_CATEGORIES_QUERY;

// ... on VariableProduct {
//   price(format: RAW)
//   id
//   regularPrice(format: RAW)
// }
// ... on ExternalProduct {
//   price(format: RAW)
//   id
//   externalUrl
//   regularPrice(format: RAW)
// }
// ... on GroupProduct {
//   id
//   products {
//     nodes {
//       ... on SimpleProduct {
//         id
//         price(format: RAW)
//         regularPrice
//       }
//     }
//   }