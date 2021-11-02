import {useState, useEffect} from 'react/cjs/react.development';
import {useParams} from 'react-router-dom';
import {getProductos} from '../../data/Data';
import ItemList from '../../itemList/ItemList';
import '../itemListContainer/itemListContainer.css'

export const ItemListContainer = () => {

  const [product,
    setProduct] = useState([])
  const [loading,
    setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {

    if (id) {
      getProductos.then((res) => {
        setProduct(res.filter(prod => prod.categoria === id))
      })
        .catch(err => console.log(err))
        . finally(() => setLoading(false))
    } else {
      getProductos.then((res) => {
        setProduct(res)
      })
        .catch(err => console.log(err))
        . finally(() => setLoading(false))
    }

  }, [id])

  return (loading
    ? <h2>Cargando..</h2>
    : <div className="container">
      <div className="row">
        <ItemList prod={product}/>

      </div>
    </div>)
}
