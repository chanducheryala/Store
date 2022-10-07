import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { ShoppingList } from './Components/ShoppingList';
import { Navbar } from './Components/Navbar';
import { CartList } from './Components/CartList';
import { Login } from './Auth/Login';
import { SelectedProduct } from './Components/SelectedProduct';


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar/>
       <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "/:category"  > 
             <Route index element = {<ShoppingList />} />
             <Route path = ":SelectedProduct" element = {<SelectedProduct />} />
          </Route>
          <Route path = "CartItems" element = {<CartList />} />
       </Routes>
    
     </div>
  );
}

export default App;
