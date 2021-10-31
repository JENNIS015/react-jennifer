import React, {useState} from 'react';

export default function ItemCount({stock, initial, onAdd}) {
  const [count,setCount] = useState(1);
  const aumentarContador = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  };

  const disminuyeContador = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const agregarCarrito = () => {
    console.log("Se agregó " + count + ' '+ onAdd  )
  }

  return (
    <div>
    <div className="quantity-input">
      <button onClick={aumentarContador}>
        +
      </button>
      <span className="cantidadAgregada">
        {count}
      </span>
      <button onClick={disminuyeContador}>
        -
      </button>
    </div>
 <div className = "agregarCarrito" > 
 <button className="btn" onClick={agregarCarrito}> Agregar</button>
  </div>  
  </div>
  );
}