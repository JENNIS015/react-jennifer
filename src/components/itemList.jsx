import {useState, useEffect} from 'react/cjs/react.development';
import {getProductos} from './data';
import detalleProducto from './item'



export const ProductosApi = () => {

  const [product,setProduct] = useState([])
  const [loading, setLoading] =useState(true)
  useEffect(() => {
    getProductos.then((res) => {
      setProduct(res)
    
      })
      .catch(err => console.log(err))
    
      .finally(() => setLoading(false))
  }, [])




  console.log(product);
  return ( loading ? <h2>Cargando..</h2>:
      product.map(tarjetaProducto =>     <div className="col s12 m6 l4" key={tarjetaProducto.id}><div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={tarjetaProducto.image} alt={tarjetaProducto.title}/>
      </div>

      <div className="card-content">
        <span>{tarjetaProducto.title}</span>
        <p>ARS {tarjetaProducto.price}</p>
      </div>

      <div>
        <button className="btn" onClick={detalleProducto}>Detalle</button>
      </div>
    </div>
    </div>
    ));
  }
