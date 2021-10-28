import React from 'react'
//import {getProductos} from './data';
import {useState, useEffect} from 'react/cjs/react.development';
import {ItemDetail} from './ItemDetail';

export default function ItemDetailContainer() {

const dataExample= 
        {
            id: 1,
            title: 'Notebook ASUS x509 15.6" Celeron N4020 4GB 500GB Win10 ',
            image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21800_Notebook_ASUS_x509_15.6__Celeron_N4020_4GB_500GB_Win10_e0bd2853-grn.jpg',
            price: 56420,
            quantity: 5
          } 
        
 const getItems = new Promise((res, rej) => {
    setTimeout(() => {
      res(dataExample);
    }, 2000);
  });
 
    const [prodIndividual,setProductIndiv] = useState([])
    const [loading, setLoading] =useState(true)
    useEffect(() => {
        getItems.then((res) => {
            setProductIndiv(res)
        
          })
          .catch(err => console.log(err))
        
          .finally(() => setLoading(false))
      }, [])
 
        
    return  ( loading ? <h5>Cargando el producto..</h5>:
        <div>           
            <ItemDetail imagen = {prodIndividual.image}
            id = {prodIndividual.id}
            title={prodIndividual.title}
            price= {prodIndividual.price}>
                
            </ItemDetail>
        </div>
    )
}
