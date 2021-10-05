import React from 'react'
import Items from './Items'

const ItemListContainer = ({greeting, setItems, items}) => {
   
   
    return (
        
        <div className="container p-3">
            
            <h2>{greeting}</h2>

            <Items 
            cartTittle="Top deportivo" 
            cardText="Top talle 3"
            img="https://http2.mlstatic.com/D_NQ_NP_635662-MLA43543396316_092020-O.jpg"
            setItems = {setItems}
            items = {items}
            />
 
        </div>
    )
}

export default ItemListContainer
