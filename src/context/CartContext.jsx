import React, {createContext, useState, useContext} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
  const [cartList,setCartList] = useState([])

  function addItems(items, count) {

    const checkNuevo = cartList.find(item => item.prod.id === items.prod.id);
    //console.log(checkNuevo)
    //console.log(items.prod.id)

    if (checkNuevo) {
      
      checkNuevo.cantidad= checkNuevo.cantidad + items.cantidad  
     // console.log(  checkNuevo.cantidad )
      setCartList(cartList)
      console.log('Se agrego cantidad')
      
    } else {
      setCartList([
        ...cartList,
        items
      ])
    }
  }
  const mostrarListado = () => {
    console.log(cartList)
  }
  return (
    <CartContext.Provider
      value={{
      cartList,
      mostrarListado,
      addItems
    }}>
      {children}
    </CartContext.Provider>
  )
}
