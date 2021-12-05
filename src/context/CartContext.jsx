import React, { createContext, useState, useContext, useEffect } from "react";


const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cantidadUnidades, setCantidades] = useState([0]);
  const [message, setMessage] = useState("");
  const deleteItem = (itemId) => {
    setCartList(cartList.filter((item) => item.id !== itemId));
  };

  const deleteAll = () => {
    setCartList([]);
  };

  const addItems = (items) => {
    const checkExist = cartList.find((item) => item.id === items.id);
    if (checkExist) {
      let cantidadNueva = checkExist.cantidad + items.cantidad;

      if (items.stock > cantidadNueva) {
        setCantidades((checkExist.cantidad = cantidadNueva));
        setCartList(cartList);
      } else {
        setMessage(
          "No se ha podido agregar al carrito. Cantidades disponibles en stock: " +
            items.stock
        );
        setTimeout(() => {
          setMessage("");
        }, 8000);
      }
    } else {
      setCartList([...cartList, items]);
    }
  };

  useEffect(() => {
    setCantidades(cartList.reduce((prev, next) => prev + next.cantidad, 0));
  }, [cartList]);

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
      (prev, next) => prev + next.cantidad * next.price,
      0
    );
  };

  // const [inputType, setInputType] = useState("input");

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [dataOrder, setOrderData] = useState({});
  const [detalleOrden, guardarDetalle] = useState();
  return (
    <CartContext.Provider
      value={{
        cartList,
        cantidadUnidades,
        dataOrder,
        formData,
        detalleOrden,
        message,
        setMessage,
        guardarDetalle,
        setFormData,
        setOrderData,
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
