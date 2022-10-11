import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { ShoppingList } from './Components/ShoppingList';
import { Navbar } from './Components/Navbar';
import { CartList } from './Components/CartList';
import { Login } from './Auth/Login';
import { SelectedProduct } from './Components/SelectedProduct';
import { SignUp } from './Auth/SignUp'
import { useSelector , useDispatch} from 'react-redux';
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { loginStatus ,userCredientails} from './reducers/loginSlice';

function App() {

   const isLogin = useSelector(state => state.Login.login)
   const dispatch = useDispatch();


   useEffect(() => {
      onAuthStateChanged(auth ,currentUser => {
        dispatch(loginStatus());
        dispatch(userCredientails(currentUser.email));
        console.log("login Successful");
      } )
   },[])

  return (
    <div className="App">
     <Navbar/> 
      <Routes>
          <Route path = "/" element = { <HomePage /> } />
          <Route path = "/:category"  > 
             <Route index element = {<ShoppingList />} />
             <Route path = ":SelectedProduct" element = {<SelectedProduct />} />
          </Route>
          <Route path = "CartItems" element = {<CartList />} />
       </Routes >
    
     </div>
  );
}

export default App;



      //  <Routes>
      //     <Route path = "/" > 
      //       <Route index element = {<Login />} />
      //       <Route path = "SignUp" element = {<SignUp />} />
      //     </Route>
      //     <Route path = "/HomePage" element = {<HomePage />} />
      //     <Route path = "/:category"  > 
      //        <Route index element = {<ShoppingList />} />
      //        <Route path = ":SelectedProduct" element = {<SelectedProduct />} />
      //     </Route>
      //     <Route path = "CartItems" element = {<CartList />} />
      //  </Routes >