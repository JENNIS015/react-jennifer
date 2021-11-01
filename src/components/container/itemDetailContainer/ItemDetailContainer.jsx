import React from 'react'
import {useState, useEffect} from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
import {ItemDetail} from './itemDetail/ItemDetail';
import { getProductos } from '../../data/Data';



export default function ItemDetailContainer() {

  const [productIndiv, setProdIndiv] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {

    if(id){
      getProductos.then((res) => {
        setProdIndiv(res.find(prod => prod.id === parseInt(id)))
      })
      
        .catch(err => console.log(err))
        .finally(() => setLoading(false))}
    else 
    {
      getProductos.then((res) => {
        setProdIndiv(res) })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [id])


console.log(productIndiv)

  return (loading
    ? <h5>Cargando el producto..</h5>
    : <div>
      <ItemDetail
        imagen={productIndiv.image}
        id={productIndiv.id}
        title={productIndiv.title}
        price={productIndiv.price}
        stock={productIndiv.stock}></ItemDetail>
    </div>)
}
