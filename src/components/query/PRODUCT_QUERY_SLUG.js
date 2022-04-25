import { gql } from '@apollo/client';

const PRODUCT_QUERY_SLUG = gql`
	query Product($slug: ID!) {
		product(id: $slug, idType: SLUG) {
			id
			productId: databaseId
			averageRating
			slug
			description
			galleryImages {
				nodes {
					id
					title
					altText
					mediaItemUrl
				}
			}
			image {
				id
				uri
				title
				srcSet
				sourceUrl
			}
			name
			... on SimpleProduct {
				price(format: RAW)
				id
				regularPrice(format: RAW)
				averageRating
				stockQuantity
				stockStatus
				attributes {
					nodes {
						label
						options
					}
				}
				galleryImages {
					nodes {
						id
						title
						altText
						mediaItemUrl
					}
				}
				id
			}
		}
	}
`;

export default PRODUCT_QUERY_SLUG;

// ... on VariableProduct {
// 	price(format: RAW)
// 	id
// 	regularPrice(format: RAW)
// 	galleryImages {
// 		nodes {
// 		  id
// 		  title
// 		  altText
// 		  mediaItemUrl
// 		}
// 	}
//   }
//   ... on ExternalProduct {
// 	price(format: RAW)
// 	id
// 	regularPrice(format: RAW)
// 	galleryImages {
// 		nodes {
// 		  id
// 		  title
// 		  altText
// 		  mediaItemUrl
// 		}
// 	}
// 	externalUrl
//   }
//   ... on GroupProduct {
// 	products {
// 	  nodes {
// 		... on SimpleProduct {
// 		  id
// 		  price(format: RAW)
// 		  regularPrice
// 		  galleryImages {
// 			nodes {
// 			  id
// 			  title
// 			  altText
// 			  mediaItemUrl
// 			}
// 		}
// 		}
// 	  }
// 	}
