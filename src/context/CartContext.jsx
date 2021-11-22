import React, { createContext, useState, useContext, useEffect } from "react";
import { getFirestore } from "../services/getFirestore";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cantidadUnidades, setCantidades] = useState([0]);

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const deleteItem = (itemId) => {
    const itemParaBorrar = cartList.filter((item) => item.prod.id !== itemId);
    setCartList(itemParaBorrar);
  };

  const deleteAll = () => {
    setCartList([]);
  };

  useEffect(() => {
    console.log("ejecuta");
    setCantidades(cartList.reduce((prev, next) => prev + next.cantidad, 0));
  }, [deleteItem]);

  const addItems = (items) => {
    const checkNuevo = cartList.find((item) => item.prod.id === items.prod.id);

    if (checkNuevo) {
      checkNuevo.cantidad = checkNuevo.cantidad + items.cantidad;
      setCartList(cartList);
    } else {
      setCartList([...cartList, items]);
    }
    setCantidades(cartList.reduce((prev, next) => prev + next.cantidad, 0));
  };

  const formatNumber = (number) => {
    return (
      <span>
        {new Intl.NumberFormat("ES-AR", {
          style: "currency",
          currency: "ARS",
        }).format(number)}
      </span>
    );
  };
  const precioTotal = () => {
    return cartList.reduce(
      (prev, next) => prev + next.cantidad * next.prod.price,
      0
    );
  };

  const dbQuery = getFirestore();

  const [showCart, setShow] = useState(true);

  return (
    <CartContext.Provider
      value={{
        cartList,
        cantidadUnidades,
        dbQuery,
        formData,
        showCart,
        setShow,
        setFormData,
        addItems,
        deleteItem,
        deleteAll,
        formatNumber,
        precioTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};
