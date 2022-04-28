import Price from '../../src/components/price/Price';
import client from '../../src/components/apoloClient';
import { useRouter } from 'next/router';
import GalleryCarousel from '../../src/components/products/GalleryCarrousel';
import { isEmpty } from 'lodash'
import Layout from '../../src/components/Layout';
import AddToCart from '../../src/components/cart/AddCartButton';
import {PRODUCT_QUERY_SLUG, PRODUCT_SLUGS} from "../../src/components/query/product_query_slug"
import Loading from "../../src/components/loading/Loading"

export default function Product(props) {

    const { product } = props;
    const router = useRouter()
 
   // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <Loading />
    }
      
  return (
    
<Layout>
    <div className="container">
      <div className="row full">
        {product ? (
          <>
            <div className="col l6 m16 s12">
              <div className="product-images">
                {!isEmpty(product?.galleryImages?.nodes) ? (
                  <GalleryCarousel gallery={product?.galleryImages?.nodes} />
                ) : !isEmpty(product.image) ? (
                  <img
                    src={product?.image?.sourceUrl}
                    alt="Product Image"
                    width="100%"
                    height="auto"
                    srcSet={product?.image?.srcSet}
                  />
                ) : null}
              </div>
            </div>
            <div className="col l6 m16 s12">
              <h1 className="title">{product.name ? product.name : ''}</h1>

              <Price
                salesPrice={product?.price}
                regularPrice={product?.regularPrice}
              />
               {/* <AddToCart product={product}/> */}

              <span className="stockDisponible">
                Stock Disponible: {product.stockQuantity}
              </span>
              {/* <p className="error">{message}</p> */}
            </div>

            <div className="col l12 m12 s12">
              {product.attributes ? (
                <h2 className="description">Caracteristicas</h2>
              ) : (
                ''
              )}
              {product.attributes
                ? product.attributes.nodes.map((item) => (
                    <div>
                      <li className="caracter">
                        <b>{item.label}</b> {item.options}
                      </li>{' '}
                    </div>
                  ))
                : ''}

              {product.description ? (
                <h2 className="description">Descripción </h2>
              ) : (
                ''
              )}

              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
                className="product-description"
              />
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
    </Layout>
  )
}

 



export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: PRODUCT_QUERY_SLUG,
        variables: { slug }
    })

    return {
        props: {
            product: data?.product || {},
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!isEmpty(product?.slug)) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}