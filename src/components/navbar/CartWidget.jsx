import React from 'react'
import { useCartContext } from '../../context/CartContext'
export const CartWidget = () => {

const {cantidadUnidades} = useCartContext()


  return (
    <div className={cantidadUnidades >0 ? 'mostrar':'ocultar'}>
    <div className="iconCantidad">
     <span className="widgetCantidad">{cantidadUnidades}</span> <i className="large material-icons">shopping_cart</i>
    </div>
    </div>
  )
}