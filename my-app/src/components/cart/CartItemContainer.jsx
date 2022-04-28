import Link from 'next/link'
import { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import {
  getFormattedCart,
  getUpdatedItems,
  removeItemFromCart,
} from '../../functions'
import CartItem from './CartItem'
import { v4 } from 'uuid'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import UPDATE_CART from '../mutation/update-cart'
import GET_CART from '../query/get_cart'
import CLEAR_CART_MUTATION from '../mutation/clearCart'

const CartItemsContainer = () => {
  // @TODO wil use it in future variations of the project.
  const [cart, setCart] = useContext(AppContext)
  const [requestError, setRequestError] = useState(null)

  // Get Cart Data.
  const { data, refetch } = useLazyQuery(GET_CART, {
    fetchPolicy: 'network-only',
    onCompleted: () => {
      //console.warn('completed GET_CART', data)
      const updatedCart = getFormattedCart(data)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      setCart(updatedCart)
    },
    onError: (error) => {
      if (error) {
        console.log(error)
      }
    },
  })

  // Update Cart Mutation.
  const [updateCart, { loading: updateCartProcessing }] = useMutation(
    UPDATE_CART,
    {
      onCompleted: () => {
        refetch()
        console.log('update cart')
      },
      onError: (error) => {
        if (error) {
          setRequestError(error.graphQLErrors[0].message)
        }
      },
    },
  )

  // Update Cart Mutation.
  const [clearCart, { loading: clearCartProcessing }] = useMutation(
    CLEAR_CART_MUTATION,
    {
      onCompleted: () => {
        refetch()
        console.log('clear cart')
      },
      onError: (error) => {
        if (error) {
          setRequestError(error.graphQLErrors[0].message)
        }
      },
    },
  )

  const handleRemoveProductClick = (event, cartKey, products) => {
    event.stopPropagation()
    if (products.length) {
      // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
      const newQty = 0
      const updatedItems = getUpdatedItems(products, newQty, cartKey)
      console.log('delete cart', updatedItems)
      updateCart({
        variables: {
          input: {
            clientMutationId: v4(),
            items: updatedItems,
          },
        },
      })
    }
  }
  // Clear the entire cart.
  const handleClearCart = (event) => {
    event.stopPropagation()

    if (clearCartProcessing) {
      return
    }
    console.log('clear cart entire')
    clearCart({
      variables: {
        input: {
          clientMutationId: v4(),
          all: true,
        },
      },
    })
  }

  return (
    <div className="cart product-cart-container container mx-auto my-32 px-4 xl:px-0">
      {cart ? (
        <div className="woo-next-cart-wrapper container">
          <div className="cart-header grid grid-cols-2 gap-4">
            <h1 className="text-2xl mb-5 uppercase">Cart</h1>
            {/*Clear entire cart*/}
            <div className="clear-cart text-right">
              <button
                className="px-4 py-1 bg-gray-500 text-white rounded-sm w-auto"
                onClick={(event) => handleClearCart(event)}
                disabled={clearCartProcessing}
              >
                <span className="woo-next-cart">Clear Cart</span>
                <i className="fa fa-arrow-alt-right" />
              </button>
              {clearCartProcessing ? <p>Clearing...</p> : ''}
              {updateCartProcessing ? <p>Updating...</p> : null}
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5">
            <table className="cart-products table-auto col-span-3 mb-5">
              <thead className="text-left">
                <tr className="woo-next-cart-head-container">
                  <th className="woo-next-cart-heading-el" scope="col" />
                  <th className="woo-next-cart-heading-el" scope="col" />
                  <th className="woo-next-cart-heading-el" scope="col">
                    Product
                  </th>
                  <th className="woo-next-cart-heading-el" scope="col">
                    Price
                  </th>
                  <th className="woo-next-cart-heading-el" scope="col">
                    Quantity
                  </th>
                  <th className="woo-next-cart-heading-el" scope="col">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.products.length &&
                  cart.products.map((item) => (
                    <CartItem
                      key={item.productId}
                      item={item}
                      updateCartProcessing={updateCartProcessing}
                      products={cart.products}
                      handleRemoveProductClick={handleRemoveProductClick}
                      updateCart={updateCart}
                    />
                  ))}
              </tbody>
            </table>

            {/*Cart Total*/}
            <div className="row woo-next-cart-total-container border p-5 bg-gray-200">
              <div className="">
                {/* <h2 className="text-2xl">Cart Total</h2> */}
                <table className="table table-hover mb-5">
                  <tbody>
                    <tr className="table-light flex flex-col">
                      <td className="woo-next-cart-element-total text-2xl font-normal">
                        Subtotal
                      </td>
                      <td className="woo-next-cart-element-amt text-2xl font-bold">
                        {'string' !== typeof cart.totalProductsPrice
                          ? cart.totalProductsPrice.toFixed(2)
                          : cart.totalProductsPrice}
                      </td>
                    </tr>
                    {/* <tr className="table-light">
										<td className="woo-next-cart-element-total">Total</td>
										<td className="woo-next-cart-element-amt">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice }</td>
									</tr> */}
                  </tbody>
                </table>
                <Link href="/checkout">
                  <button className="bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full">
                    <span className="woo-next-cart-checkout-txt">
                      Proceed to Checkout
                    </span>
                    <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Display Errors if any */}
          {requestError ? (
            <div className="row woo-next-cart-total-container mt-5">
              {' '}
              {requestError}{' '}
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        <div className="container mx-auto my-32 px-4 xl:px-0">
          <h2 className="text-2xl mb-5">No items in the cart</h2>
          <Link href="/">
            <button className="bg-purple-600 text-white px-5 py-3 rounded-sm">
              <span className="woo-next-cart-checkout-txt">
                Add New Products
              </span>
              <i className="fas fa-long-arrow-alt-right" />
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartItemsContainer
