import {memo} from 'react'
import Item from '../item/Item'


const ItemList = memo(
    ({prod}) =>{
       
    return (
        prod.map(prodIndividual=> <Item key={prodIndividual.id} prod={prodIndividual} /> ) 
    )
})

export default ItemList