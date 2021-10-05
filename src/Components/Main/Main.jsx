
import React, {useState} from 'react';
import NavBar from '../NavBar';
import ItemListContainer from '../ItemListContainer';

const Main = () => {
    
    const [items, setItems] = useState(0);
    
    return (
       
    <div >
      
    <NavBar items={items}/>
    <ItemListContainer setItems={setItems} items={items}/>
    
  </div>
    )
}

export default Main
