import './App.css';
import './index.css';
import { useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { ShoppingList } from './Components/ShoppingList';
import { Navbar } from './Components/Navbar';
import { CartList } from './Components/CartList';
import { Login } from './Auth/Login';
import { SelectedProduct } from './Components/SelectedProduct';
import { useSelector , useDispatch} from 'react-redux';
import { SignUp } from './Auth/SignUp'
import { onAuthStateChanged } from 'firebase/auth'
import  { auth } from './firebase-config' 
import { ForgotPassword } from './Auth/ForgotPassword';
import { DisplayComponent } from './Components/DisplayComponent';
import { SkeletonComponent } from './Components/SkeletonComponent';


const App = () => {
  const isLogin = useSelector(state => state.Login.login)
  const [ Owner , setOwner ] = useState()
  const [loading , setLoading ] = useState(true);

  useEffect(() => {
   setTimeout(() => {
      onAuthStateChanged(auth , currentUser => {
        
        if(currentUser) {
          setOwner(currentUser)
          console.log(currentUser);
        } else {
          setOwner(null)
        }
        setLoading(false);
        
        })
   }, 0)
   
  }, [])

 return (
  loading ? <SkeletonComponent /> :
     <div className="App">
        {  Owner && <Navbar/>  }
     <Routes>
         <Route path = "/" element = {<DisplayComponent Owner = {Owner } />} />
         <Route path = "/:category"  > 
            <Route index element = {<ShoppingList />} />
            <Route path = ":SelectedProduct" element = {<SelectedProduct />} />
         </Route>
         <Route path = "CartItems" element = { <CartList />} />
         <Route path = "/SignUp" element = { <SignUp />} />
      </Routes >
   
    </div>

 
  );
}

export default App;

