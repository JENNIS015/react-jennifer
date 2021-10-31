import {useState, useEffect} from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
import {getProductos} from '../../data/Data';
import ItemList from '../../itemList/ItemList';



export const ItemListContainer = () => {

  const [product,setProduct] = useState([])
  const [loading, setLoading] =useState(true)

  const {id} = useParams()


  useEffect(() => {

    if(id){
      getProductos.then((res) => {
        setProduct(res.filter(prod => prod.categoria === id)) 
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }else{
      getProductos.then((res) => {
        setProduct(res) 
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

  }, [id])

console.log(id)

  return ( loading ? <h2>Cargando..</h2>:
    <>
     
        <ItemList prod={product}/>   
   
    </>
  )
  }
