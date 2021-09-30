
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';

function App() {
  return(

    <div>
      <NavBar/>
      <ItemListContainer
      greeting = "Aca va la lista de productos"
      />
      
    </div>
  )
  
}

export default App;
