import React from "react";
import { useCartContext } from "../../context/CartContext";
import "firebase/firestore";
import firebase from "firebase";
import { useState } from "react";

export default function FormOrder() {
  const {
    cartList,
    showCart,
    deleteAll,

    precioTotal,
    dbQuery,
    setShow,
  } = useCartContext();

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [dataOrder, setOrderData] = useState("");

  const generarOrden = (e) => {
    e.preventDefault();
    let orden = {};
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = formData;
    orden.total = precioTotal();
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.prod.id;
      const nombre = cartItem.prod.nombre;
      const precio = cartItem.prod.price * cartItem.cantidad;
      return { id, nombre, precio };
    });

    dbQuery
      .collection("orders")
      .add(orden)
      .then((resp) => setOrderData(resp.id)) //Mostrar id al usuario
      .catch((err) => console.log(err))
      .finally(
        () => setFormData({ nombre: "", telefono: "", email: "" }),
        setShow(false),
        deleteAll()
      );

    // en el listado de cart del cartContext
    const itemsToUpdate = dbQuery.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartList.map((i) => i.prod.id)
    );

    const batch = dbQuery.batch();

    //por cada item restar del stock la cantidad del carrito
    itemsToUpdate.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cartList.find((item) => item.prod.id === docSnapshot.id).cantidad,
        });
      });

      batch.commit().then((res) => {
        console.log("resultado batch:", res);
      });
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <section>
        {dataOrder !== "" && (
          <>
            <h1>¡Muchas gracias!</h1>
            <h4>Compra Finalizada</h4>
            <p>Tu código de compra es: {dataOrder}</p>
            <p>Total:</p>

            {() => this.generarOrden}

            {/* Total:{(dbQuery.colletion("orders").doc(dataOrder))} */}
          </>
        )}
      </section>

      <form
        style={{ display: showCart && cartList?.length ? "block" : "none" }}
        onChange={handleChange}
        onSubmit={generarOrden}>
        <input
          type='text'
          name='nombre'
          placeholder='Nombre'
          defaultValue={formData.nombre}
        />
        <input
          type='text'
          name='telefono'
          placeholder='Telefono'
          defaultValue={formData.telefono}
        />
        <input
          type='email'
          name='email'
          placeholder='Correo Electrónico'
          defaultValue={formData.email}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}
