import React from "react";
import Loading from "../../loading/Loading";
import { useState, useEffect } from "react";
import Price from "../../price/Price";
import PRODUCT_QUERY_SLUG from "../../query/PRODUCT_QUERY_SLUG";
import client from "../../apoloClient";
import { useParams } from "react-router-dom";
import GalleryCarousel from "./itemDetail/GalleryCarrousel";
import { isEmpty } from 'lodash';
import "./itemDetail/css/detailProduct.css"


const ItemDetailContainer =() =>{

const [product, setDataProducts] = useState([])
const [loading, setLoading] = useState(false)
const { slug } = useParams();


async function runQuery() {
setLoading(true)
const {data}= await client.query({
query: PRODUCT_QUERY_SLUG,
variables: {slug}
})

const product = data?.product || {}
setLoading(false)
setDataProducts(product)

}


useEffect(() => {
runQuery()
}, [])

console.warn(product)



return loading ? (
<Loading />
) : (
<div className="container">
  <div className="row full">

    {

    product ? (
    <>
      <div className="col l6 m16 s12">

        <div className="product-images">
          { !isEmpty( product?.galleryImages?.nodes ) ? (
          <GalleryCarousel gallery={product?.galleryImages?.nodes} />
          ) :!isEmpty ( product.image ) ? (
          <img src={ product?.image?.sourceUrl } alt="Product Image" width="100%" height="auto" srcSet={
            product?.image?.srcSet } />
          ) : null }
        </div>
      </div>
      <div className="col l6 m16 s12">
        <h1 className="title">
          { product.name ? product.name : '' }
        </h1>

        <Price salesPrice={product?.price} regularPrice={product?.regularPrice} />

      </div>

      <div className="col l12 m12 s12">
      { product.attributes ? <h2 className="description">Caracteristicas</h2>:""}
      { product.attributes ?
      product.attributes.nodes.map(item =>  (
         <div>
        <li className="caracter"><b>{item.label}</b> {item.options}</li> </div>))
      :""}
        

  
        { product.description ? <h2 className="description">Descripción </h2> : '' }

          <div dangerouslySetInnerHTML={ { __html: product.description, } } className="product-description" />
      </div>
    </>
    ):("")}
  </div>
</div>
)}

export default ItemDetailContainer