import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { ShoppingList } from './Components/ShoppingList';
import { Navbar } from './Components/Navbar';
import { CartList } from './Components/CartList';
import { Login } from './Auth/Login';


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar/>
       <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "/:category"  element = {<ShoppingList />} />
          <Route path = "CartItems" element = {<CartList />} />
       </Routes>
    
     </div>
  );
}

export default App;
