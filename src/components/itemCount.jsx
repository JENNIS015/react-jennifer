import React, { useState } from 'react';

export default function Tarjetas({price, title, image, quantity}) {
  const [count, setCount] = useState(1);
  const aumentarContador = () => {
    if (count<quantity){
      setCount(count+1) 
     
     }
  };
  const disminuyeContador = () => {
    if(count > 1){
      setCount(count - 1);
      console.log(count);
    }
  };
 
  const agregarCarrito =() =>{
    alert ( "Se agregó " + count + " " + title)
  }
  return (

    <div className="col s12 m6 l4">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={image} alt={title}/>

      </div>
      <div className="card-content">
        <span>{title}</span>

        <p>ARS {price}</p>
      </div>
      <div className="quantity-input">
 
      <button onClick={aumentarContador}>+</button>
      <span className="cantidadAgregada">{count}</span>
      <button onClick={ disminuyeContador }>-</button>

      <div>
      <button className="btn" onClick={agregarCarrito}>Agregar</button>
      </div>
  </div> </div>
    </div >);
}