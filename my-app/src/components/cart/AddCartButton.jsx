import { v4 } from 'uuid'
import { AppContext } from '../../context/AppContext'
import { getFormattedCart } from '../../functions'
import GET_CART from '../query/get_cart'
import ADD_TO_CART from '../mutation/addToCart'
import React, { useState, useContext, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useLazyQuery } from '@apollo/client';
import Link from 'next/link'

  const AddToCart = (props) => {
  const { product } = props;

  const productQtyInput = {
    clientMutationId: v4(), // Generate a unique id.
    productId: product?.databaseId,
  };
 

  /* eslint-disable */
  const [cart, setCart] =useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);
  const [requestError, setRequestError] = useState(null);

  // Get Cart Data.





  // Add to Cart Mutation.
  const [
    addToCart,
    { data: addToCartRes, loading: addToCartLoading, error: addToCartError },
  ] = useMutation(ADD_TO_CART, {
    variables: {
      input: productQtyInput,
    },
    onCompleted: () => {
      // If error.
 
      if (addToCartError) {
        setRequestError(addToCartError);
      }

      // On Success:
      // 1. Make the GET_CART query to update the cart with new values in React context.
      refetch();

      // 2. Show View Cart Button
      setShowViewCart(true);
    },
    onError: (error) => {
      if (error) {
        setRequestError(error);
      }
    },
  });

  const { data, loading,refetch } = useQuery(GET_CART, {
	   fetchPolicy:"network-only",
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      console.warn( 'completed GET_CART' );
      // Update cart in the localStorage.
	  console.log(data)
      const updatedCart = getFormattedCart(data);
      console.log(updatedCart)
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Update cart data in React Context.
      setCart(updatedCart);
	},
    onError: (error) => {
      if (error) {
        console.log(error)
      }}
    },[]);


  const handleAddToCartClick = () => {
    setRequestError(null);
    addToCart();
  };

  return (
    <div>
      {/*	Check if its an external product then put its external buy link */}
      {"ExternalProduct" === product.nodeType ? (
        <a href={product.externalUrl} target="_blank">
          <button className="btn btn-outline-dark">Buy Now</button>
        </a>
      ) : (
        <button onClick={handleAddToCartClick} className="btn btn-outline-dark">
          Add to cart
        </button>
      )}
      {showViewCart ? (
        <Link href="/cart">
          <button className="woo-next-view-cart-btn btn btn-outline-dark">
            View Cart
          </button>
        </Link>
      ) : (
        ""
      )}
      {/* Add To Cart Loading*/}
      {addToCartLoading ? (
        <p className="mt-2">Adding to Cart...</p>
      ) : (
        <p className="mt-2" style={{ color: "transparent" }}>
          Adding to Cart...
        </p>
      )}
    </div>
  );
};

export default AddToCart
