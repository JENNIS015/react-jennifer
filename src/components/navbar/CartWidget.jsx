import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/AppContext";
import { formatNumber } from '../../functions';

const CartWidget = () => {
 
  const {  cart } = useCartContext();
  
  const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
  const totalPrice = cart && Object.keys(cart).length ? cart.totalProductsPrice : ''

 
  return (
    <Link to="/cart">
      <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block m-auto"
          fill="none"
          viewBox="0 0 24 24"
          width="18"
          height="auto"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        
        { productsCount ? <span className="cartItemNav">({ productsCount })</span> : '' }
 
        { totalPrice ? <span className='cartPriceNav'>{ formatNumber(totalPrice )}</span> : '' }
      </a>
    </Link>
  )
}

export default CartWidget
