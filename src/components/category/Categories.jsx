import client from '../apoloClient'
import ParentCategoriesBlock from './ParentCategoriesBlock'
import GET_CATEGORIES from '../query/get_categories'
import {useEffect, useState} from "react"

export default function Categories( ) {

const [categories, setCategories] = useState([])

  async function runQuery() {
    // Set the loading true.
    // setLoading(true)
  
    const  result = await client.query({
      query: GET_CATEGORIES,
    })
    const data = result.data.productCategories.nodes
  
    // Reset the loading state.
    // setLoading(false)
    setCategories( data )
  }

  useEffect(() => {
    runQuery()
  }, [])
  
  return (
    <div>
      <h2 className="uppercase">Categories</h2>
      <ParentCategoriesBlock productCategories={ categories }/>
    </div>
  )
 }

 