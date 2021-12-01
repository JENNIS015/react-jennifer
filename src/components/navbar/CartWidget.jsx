import React from 'react'
import { useCartContext } from '../../context/CartContext'
export const CartWidget = () => {

const {cantidadUnidades} = useCartContext()


  return (
    <div >
    <div className="iconCantidad">
      <div className={cantidadUnidades >0 ? 'mostrar':'ocultar'}>
     <span className="widgetCantidad" >{cantidadUnidades}</span> </div> <i className="large material-icons">shopping_cart</i>
    </div>
    </div>
  )
}