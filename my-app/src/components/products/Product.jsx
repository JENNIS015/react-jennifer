import Link from 'next/link'
import { DEFAULT_PRODUCT_HOME_IMG_URL } from '../constants/constant'
import Price from '../price/Price'
import AddToCart from '../cart/AddCartButton'

export default function Product(props) {
  const { product } = props


  return (
    <div>
      {product ? (
        <div className="col l4 m14 s12">
          <div className="card hoverable">
            <Link href={ `/product/${ product?.slug }`} >
              <a>
                <img
                  className="imgCard"
                  loading="lazy"
                  src={
                    product.image.sourceUrl  
                  }
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src=DEFAULT_PRODUCT_HOME_IMG_URL
                  }}
                  alt={product?.image?.altText ?? product?.slug}
                />
              </a>
            </Link>
            <div className="product-info">
              <h3 className="title">{product.name ? product.name : ''}</h3>

              <Price
                salesPrice={product?.price}
                regularPrice={product?.regularPrice}
              />
			    
              <AddToCart product={ product }/>
            </div>
          </div>
        </div>
      ) : (
        <p>No se encontro</p>
      )}
    </div>
  )
}
