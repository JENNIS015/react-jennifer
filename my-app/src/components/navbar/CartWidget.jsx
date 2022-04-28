import {React, useState,useContext} from 'react'
import { AppContext } from '../../context/AppContext'
import CartDown from './CartDown'

const CartWidget = () => {
  const [cart] = useContext(AppContext);

  const productsCount =
    cart && Object.keys(cart).length ? cart.totalProductsCount : ''
  const totalPrice =
    cart && Object.keys(cart).length ? cart.totalProductsPrice : ''
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <>
      <button
        className="woo-menu-cart-icon"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="woo-next-cart-wrap">
          {totalPrice ? (
            <span className="woo-next-cart-price mr-2">{totalPrice}</span>
          ) : (
            ''
          )}
          <span className="woo-next-cart-icon-container">
            <span role="img" aria-label="cart-icon">
              🛒
            </span>
            {productsCount ? (
              <span className="woo-next-cart-count">{productsCount}</span>
            ) : (
              ''
            )}
          </span>
        </div>
      </button>
      <CartDown isDropdownOpen={isDropdownOpen} />
    </>
  )
}

export default CartWidget
