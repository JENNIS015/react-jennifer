import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || null;
  });
 
  return (
    <CartContext.Provider value={{cart, setCart  }}>
      {children}
    </CartContext.Provider>
  )
}
