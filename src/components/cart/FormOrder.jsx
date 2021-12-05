import { useCartContext } from "../../context/CartContext";
import "firebase/firestore";
import firebase from "firebase/app";
import Form from "./Form";
import { Redirect } from "react-router";
import { getFirestore } from "../../services/getFirestore";

const FormOrder = () => {
  const {
    formData,
    cartList,
    deleteAll,
    precioTotal,
    setFormData,
    setOrderData,
  } = useCartContext();

  const generarOrden = (e) => {
    e.preventDefault();
    let orden = {};

    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = formData;
    orden.total = precioTotal();
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const cantidad = cartItem.cantidad;
      const urlImagen = cartItem.urlImagen;
      const price = cartItem.price;
      const subtotal = cartItem.price * cartItem.cantidad;
      return { id, nombre, price, subtotal, cantidad, urlImagen };
    });

    const dbQuery = getFirestore();
    dbQuery
        .collection("orders")
        .add(orden)
        .then((res) => setOrderData({ id: res.id, ...res.data }))
        .catch((err) => console.log(err))
        .finally(
          () => setFormData({ nombre: "", telefono: "", email: "" }),
          deleteAll()
        );
    
    // en el listado de cart del cartContext
    const itemsToUpdate = dbQuery.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartList.map((i) => i.id),
    );

    const batch = dbQuery.batch();

    //por cada item restar del stock la cantidad del carrito
    itemsToUpdate.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cartList.find((item) => item.id === docSnapshot.id).cantidad,
        });
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
      {cartList.length === 0 && formData.nombre !== "" ? (
        <Redirect to={{ pathname: "/sucess" }} />
      ) : cartList.length > 0 ? (
        <Form cambio={handleChange} envio={generarOrden} />
      ) : (
        ""
      )}
    </div>
  );
};
export default FormOrder;
