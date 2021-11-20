import React from 'react'
import {useState} from 'react'
import {useCartContext} from '../../context/CartContext'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'
import './cart.css'
import firebase from "firebase"
import {getFirestore} from '../../services/getFirestore'
import 'firebase/firestore'
export default function Cart() {

  const {cartList, deleteAll, formatNumber, precioTotal} = useCartContext()

  const [formData,
    setFormData] = useState({nombre: '', telefono: '', email: ''})

  const generarOrden = (e) => {

    e.preventDefault()
    let orden = {}
    orden.date = firebase
      .firestore
      .Timestamp
      .fromDate(new Date());
    orden.buyer = formData
    orden.total = precioTotal();
    orden.items = cartList.map(cartItem => {
      const id = cartItem.prod.id;
      const nombre = cartItem.prod.nombre;
      const precio = cartItem.prod.price * cartItem.cantidad
      console.log(cartItem)
      return {id, nombre, precio}

    })

    const dbQuery = getFirestore()
    dbQuery.collection('orders').add(orden)
    .then(resp=>alert(resp.id))//Mostrar id al usuario
      .catch(err => console.log(err))
      . finally(() => setFormData({nombre: '', telefono: '', email: ''})
      //llamar carrito q guarda la orden para q se reinicie tmb
      )

    // dbQuery.collection('items').doc('2O2qy3onPC5IC8orDfwC').update({   stock:9 })
    // .then(resp => alert('producto agregado')) actualiza todos los items que estan
    // en el listado de cart del cartContext
    const itemsToUpdate = dbQuery
      .collection('items')
      .where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.prod.id))

    const batch = dbQuery.batch();

    //por cada item restar del stock la cantidad del carrito
    itemsToUpdate
      .get()
      .then(collection => {
        collection
          .docs
          .forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
              stock: docSnapshot
                .data()
                .stock - cartList
                .find(item => item.prod.id === docSnapshot.id)
                .cantidad
            })
          })

        batch
          .commit()
          .then(res => {
            console.log('resultado batch:', res)
          })

        console.log(orden)
      })
  }
  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
  })
console.log(formData)
  }
  console.log(formData)

  var condition = !cartList
    ?.length

  if (condition !== true) {
    return (
      <div className="container">
        <div className="row">
          <h1>Carrito</h1>
          <table>

            <tbody>
              {cartList.map(prodCart => <CartItem key={prodCart.prod.id} productos={prodCart}/>)}
            </tbody>
          </table>

          <h5 className="total">Total:{formatNumber(precioTotal())}
          </h5>
          <button onClick= {() => deleteAll()}>Vaciar Carrito</button>
          <form onSubmit={generarOrden} onChange={handleChange}>
            <input type="text" name="nombre" placeholder="name" value={formData.nombre}/>
            <input type="text"name="telefono" placeholder="phone"value={formData.telefono}/>
            <input type="email" name="email" placeholder="email" value={formData.email}/>
            <button>Enviar</button>

          </form>

        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h3>Tu carrito está vacío</h3>
      <h5>
        ¿No sabés qué comprar? ¡Miles de productos te esperan !</h5>
      <Link to={`/`} className="waves-effect waves-light btn">
        Ir a Productos
      </Link>
    </div>
  )
}