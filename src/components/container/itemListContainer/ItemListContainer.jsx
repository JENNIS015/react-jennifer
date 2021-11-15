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
        .finally(() => setLoading(false))
    } else {
      getProductos.then((res) => {
        setProduct(res)
      })
        .catch(err => console.log(err))
        . finally(() => setLoading(false))
    }

  }, [id])

  return (loading
    ? <div className="spinner">
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </div>
    : <div className="container">
      <div className="row">
        <ItemList prod={product}/>

      </div>
    </div>)
}
