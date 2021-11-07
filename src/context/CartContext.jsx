import React, {createContext, useState, useC} from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cartList,setCarlist] = useState([])
  const mostrarListado = () => {
    console.log(cartList)
  }
  return (
    <CartContext.Provider value={{
        cartList,
      mostrarListado
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
