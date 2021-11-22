import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./cart.css";
import "firebase/firestore";
import { useState } from "react";
import FormOrder from "./FormOrder";


const Cart=() =>{
  const { cartList, showCart,deleteAll, formatNumber, precioTotal } = useCartContext();
 
  let condition = cartList?.length;
   return (        
    <div className='container'>
      <div className='row'>
        {condition ? (
          <>
            <h1>Carrito</h1>
            <table>
              <tbody>
                {cartList.map((prodCart) => (
                  <CartItem key={prodCart.prod.id} productos={prodCart} />
                ))}
              </tbody>
            </table>

            <h5 className='total'>Total:{formatNumber(precioTotal())}</h5>
            <button onClick={() => deleteAll()}>Vaciar Carrito</button>
          </>
        ) : (
          <div style={{display: showCart ? "block" : "none"}}>
            <h3>Tu carrito está vacío</h3>
            <h5>¿No sabés qué comprar? ¡Miles de productos te esperan !</h5>
            <Link to={`/`} className='waves-effect waves-light btn'>
              Ir a Productos
            </Link>
          </div>
        )}
        <FormOrder />
      </div>
    </div>
  );
}

export default Cart