import { useState } from 'react'
import { v4 } from 'uuid'
// import { useCartContext } from '../../context/AppContext'
 import { getUpdatedItems } from '../../functions'
// import { updateCart,formatNumber } from '../../functions'
const CartItem = ( {
	                   item,
	                   products,
					   updateCartProcessing,
	                   handleRemoveProductClick,
	                   updateCart,
                   } ) => {
  const [productCount, setProductCount] = useState(item.qty)
  // const { setCart } = useCartContext()
  /*
   * When user changes the qty from product input update the cart in localStorage
   * Also update the cart in global context
   *
   * @param {Object} event event
   *
   * @return {void}
   */
  const handleQtyChange = (event, cartKey) => {
    if (process.browser) {
      event.stopPropagation()

      // If the previous update cart mutation request is still processing, then return.
      if (updateCartProcessing) {
        return
      }

    // If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
			const newQty = ( event.target.value ) ? parseInt( event.target.value ) : 1;
      // Set the new qty in state.
      setProductCount(newQty)

      // let existingCart = localStorage.getItem('cart')
      // existingCart = JSON.parse(existingCart)

      // //update cart
      // let qtyToBeAdded = false
      // const updatedCart = updateCart(existingCart, item, qtyToBeAdded, newQty)

      // setCart(updatedCart)
          if (products.length) {
            const updatedItems = getUpdatedItems(products, newQty, cartKey)

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
  }

  return (
    <tr className="woo-next-cart-item" key={item.productId}>
      <th className="woo-next-cart-element woo-next-cart-el-close">
        {/* Remove item */}
        <span
          className="woo-next-cart-close-icon cursor-pointer"
          onClick={(event) =>
            handleRemoveProductClick( event, item.cartKey, products)
          }
        >
         <i class="material-icons">delete</i>
        </span>
      </th>
      <td className="woo-next-cart-element">
        <img
          width="64"
          src={item.image.sourceUrl}
          srcSet={item.image.srcSet}
          alt={item.image.title}
        />
      </td>
      <td className="woo-next-cart-element">{item.name}</td>
      <td className="woo-next-cart-element">
        {( 'string' !== typeof item.price ) ? item.price.toFixed( 2 ) : item.price}
      </td>

      {/* Qty Input */}
      <td className="woo-next-cart-element woo-next-cart-qty">
        {/* @TODO Need to update this with graphQL query */}
        <input
          type="number"
          min="1"
          data-cart-key={item.cartKey}
          className="woo-next-cart-qty-input"
          value={productCount}
          onChange={ ( event ) => handleQtyChange( event, item.cartKey ) }
 
        />
      </td>

      <td className="woo-next-cart-element">
     

        	{ ( 'string' !== typeof item.totalPrice ) ? item.totalPrice.toFixed( 2 ) : item.totalPrice }
      </td>
    </tr>
  )
}

export default CartItem
