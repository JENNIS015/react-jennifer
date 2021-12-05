import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../cart/css/estilo_cart.css";
import "firebase/firestore";
import FormOrder from "./FormOrder";

const Cart = () => {
  const { cartList, deleteAll, formatNumber, precioTotal } = useCartContext();

  return (
    <div className='container'>
      <div className='col s12'>
        <div className='row'>
          <div className='col m12 l8'>
            {cartList.length ? (
              <>
                <h1>Carrito</h1>
                <table className="responsive-table">
                  <tbody>
                    {cartList.map((prodCart) => (
                      
                      <CartItem  key={prodCart.id} prod={prodCart} />
                    ))}
                  </tbody>
                </table>

                <h5 className='total'>Total:{formatNumber(precioTotal())}</h5>
                <button onClick={() => deleteAll()}>Vaciar Carrito</button>
              </>
            ) : (
              <div className="container full">
                <h3>Tu carrito está vacío</h3>
                <h5>¿No sabés qué comprar? ¡Miles de productos te esperan !</h5>
                <Link to={`/`} className='waves-effect waves-light btn'>
                  Ir a Productos
                </Link>
              </div>
            )}
          </div>
          <div className='col s12 m12 l4'>
            <FormOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
