import React from 'react'
import Item from '../item/Item'

export default function ItemList({prod}) {
    return (
        prod.map(prodIndividual=> <Item key={prodIndividual.id} prod={prodIndividual} /> ) 
    )
}
