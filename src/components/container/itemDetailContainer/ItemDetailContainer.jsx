import React from 'react'
import { getFirestore } from '../../../services/getFirestore';
import {useState, useEffect} from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
import {ItemDetail} from './itemDetail/ItemDetail';

export default function ItemDetailContainer() {

  const [productIndiv, setProdIndiv] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams()

useEffect(() => {
  const db =getFirestore()
  if(id){
    const dbQueryIndividual= db.collection('items').doc(id).get()
    dbQueryIndividual.then((res) => {
      setProdIndiv({id:res.id, ...res.data()})
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  } else{
    const dbQuery= db.collection('items').get().then((res) => {
    dbQuery.setProdIndiv(res.data()) })
   .catch(err => console.log(err))
   .finally(() => setLoading(false))

  }
  
}, [id])


  return (loading
    ? 
    <div className="spinner">
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </div>
    : <div>
      <div className="container">
      <div className="row">
      <ItemDetail prod= {productIndiv}/>
    </div>
    </div>
    </div>)
}
