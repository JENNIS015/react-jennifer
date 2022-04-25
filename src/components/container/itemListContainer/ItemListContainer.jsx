import React from 'react'
import Loading from '../../loading/Loading'
import PRODUCTS_AND_CATEGORIES_QUERY from '../../query/PRODUCTS_AND_CATEGORIES_QUERY'
import Product from './Product'
import client from '../../apoloClient'
import { useState, useEffect } from 'react'
import Layout from '../../Layout'

const ItemListContainer = () => {
  const [dataProduct, setDataProducts] = useState([])
  const [loading, setLoading] = useState(false)

  async function runQuery() {
    // Set the loading true.
    setLoading(true)

    // Manually query your queries.
    const result = await client.query({ query: PRODUCTS_AND_CATEGORIES_QUERY })
    const dataProduct = result.data.products.nodes
 
    // Reset the loading state.
    setLoading(false)
    setDataProducts(dataProduct)
  }
  // You can either start the query when this gets mounted or manually run it.
  useEffect(() => {
    // Automatically run the query if you want
    runQuery()
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <Layout>
      {dataProduct.length
        ? dataProduct.map((product) => (
            <Product product={product} key={product.id} />
          ))
        : ''}
    </Layout>
  )
}

export default ItemListContainer
