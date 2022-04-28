import React, { createContext, useState, useEffect,useContext } from 'react'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
 const [ cart, setCart ] = useState( null );

	useEffect( () => {

		// @TODO Will add option to show the cart with localStorage later.
		if ( process.browser ) {

			let cartData = localStorage.getItem( 'woo-next-cart' );
			cartData = null !== cartData ? JSON.parse( cartData ) : '';
			setCart( cartData );

		}

	}, [] );


  
 
  return (
    <CartContext.Provider value={[ cart, setCart ] }>
      {children}
    </CartContext.Provider>
  )
}
