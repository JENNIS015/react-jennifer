import React, {createContext, useState, useContext} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
  const [cartList,
    setCartList] = useState([])

  const addItems = (items) => {

    const checkNuevo = cartList.find(item => item.prod.id === items.prod.id);
    if (checkNuevo) {
      checkNuevo.cantidad = checkNuevo.cantidad + items.cantidad
      // console.log(  checkNuevo.cantidad )
      setCartList(cartList)
      console.log('Se agrego cantidad')

    } else {
      setCartList([
        ...cartList,
        items
      ])
    }}

    const deleteAll = () => {
      setCartList([])

    }
    const mostrarListado = () => {
      console.log(cartList)
    }
    return (
      <CartContext.Provider
        value={{
        cartList,
        mostrarListado,
        addItems,
        deleteAll
      }}>
        {children}
      </CartContext.Provider>
    )
  }
