import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { Link } from "react-router-dom";
import { v4 } from 'uuid'
import { useCartContext } from '../../context/AppContext'
import { addFirstProduct, updateCart, getFormattedCart } from '../../functions'
import GET_CART from '../query/get_cart'
import ADD_TO_CART from '../mutation/addToCart'

const AddToCart = (props) => {
  const { product } = props
  const { cart, setCart } = useCartContext()

  // const productQryInput = {
  //     clientMutationId: v4(), // Generate a unique id.
  //     productId: product.productId,
  // };

  const [showViewCart, setShowViewCart] = useState(false)
  // const [requestError, setRequestError] = useState(null);

  // const {data, refetch} = useQuery(GET_CART, {
  //         notifyOnNetworkStatusChange: true,
  //         onCompleted: () => {
  //          console.log("HOLA")
  //             // Update cart in the localStorage.
  //             const updatedCart = getFormattedCart(data);
  //             console.log(updatedCart)
  //             localStorage.setItem('cart', JSON.stringify(updatedCart));

  //             // Update cart data in React Context.
  //             setCart(updatedCart);
  //         }
  //     });

  // // Add to Cart Mutation.
  // const [addToCart, {
  //     data: addToCartRes,
  //     loading: addToCartLoading,
  //     error: addToCartError
  // }] = useMutation(ADD_TO_CART, {
  //     variables: {
  //         input: productQryInput,
  //     },
  //     onCompleted: () => {
  //         // On Success:
  //         // 1. Make the GET_CART query to update the cart with new values in React context.
  //         refetch();

  //         // 2. Show View Cart Button
  //         setShowViewCart(true)
  //     },
  //     onError: (error) => {
  //         if (error) {
  //             setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
  //         }
  //     }
  // });

  const handleAddToCartClick = async () => {
    if (process.browser) {
      let existingCart = localStorage.getItem('cart')
      if (existingCart) {
        existingCart = JSON.parse(existingCart)
        const qtyToBeAdded = 1
        const updatedCart = updateCart(existingCart, product, qtyToBeAdded)
        setCart(updatedCart)
      } else {
        const newCart = addFirstProduct(product)
        setCart(newCart)
      }
      setShowViewCart(true)
      // setRequestError(null);
      // await addToCart();
    }
  }

  return (
    <div>
      {/*	Check if its an external product then put its external buy link */}
      {/* {'ExternalProduct' === product.__typename ? (
        <a
          href={product?.externalUrl ?? '/'}
          target="_blank"
          className="px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600"
        >
          Buy now
        </a>
      ) : ( */}
      <button
        // disabled={addToCartLoading}
        onClick={handleAddToCartClick}
        // className={cx(
        //     'px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current',
        //     {'hover:bg-purple-600 hover:text-white hover:border-purple-600': !addToCartLoading},
        //     {'opacity-50 cursor-not-allowed': addToCartLoading}
        // )}
      > Add to cart
        {/* { addToCartLoading ? 'Adding to cart...' : 'Add to cart' } */}
      </button>
      {showViewCart ? (
        <Link to="/cart">
          <button> Ver Carrito </button>
        </Link>
      ) : (
        ''
      )}
       
      {/* {showViewCart ? (
                <Link href="/cart">
                    <button
                        className="px-3 py-1 rounded-sm text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600">View
                        Cart
                    </button>
                </Link>
            ) : ''} */}
    </div>
  )
}

export default AddToCart
