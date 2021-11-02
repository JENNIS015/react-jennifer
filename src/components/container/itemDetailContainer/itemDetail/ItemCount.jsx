import React, {useState} from 'react';

export default function ItemCount({stock, onAdd}) {
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

  return (
    <div>
   
      <div className="quantity-input">
        <button onClick={disminuyeContador}>
          -
        </button>
        <span className="cantidadAgregada">
          {count}
        </span>
        <button onClick={aumentarContador}>
          +
        </button>
    
      </div>

      <div className="agregarCarrito">
      <button className="btn" onClick={()=>onAdd(count)}> Agregar</button>
        </div>
    </div>
  );
}