import React from 'react' 
import PRODUCTS_AND_CATEGORIES_QUERY from '../src/components/query/PRODUCTS_AND_CATEGORIES_QUERY'
import Product from '../src/components/products/Product'
import client from '../src/components/apoloClient'
import Layout from '../src/components/Layout'

const ItemListContainer = (props) => {
 
 
 const { products, productCategories, heroCarousel } = props || {};

  return   (
    <Layout>
      {products.length
        ? products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        : ''}
    </Layout>
  )
}

export default ItemListContainer

export async function getStaticProps () {

	const { data } =  
		await client.query({ query: PRODUCTS_AND_CATEGORIES_QUERY })
 

	return {
		props: {
			// productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			// heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};