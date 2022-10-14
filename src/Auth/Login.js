import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/bgpic.jpg'
import { auth } from '../firebase-config'
import {loginStatus, userEmail, userPassword} from '../reducers/loginSlice' 
import { signInWithEmailAndPassword ,onAuthStateChanged} from 'firebase/auth'
import { useDispatch , useSelector } from 'react-redux'

export const Login = () => {

  const userDetails = useSelector(state => state.Login.userEmail);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const [error , setError] = useState(null);
  const [user, setUser ] = useState(
    {
       email : "",
       password : ""
    }
  )

  const loginHandler = async() => {
    try {
      await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password) 
    }
    catch(err)  {
       setError("No User Found ! Create New Account");
    }
     dispatch(userEmail(user.email));
     dispatch(userPassword(user.password));
     dispatch(loginStatus(true)) 
  }
  
  return (
    <div className='Login'>
        <div >
          <img src = {bgImage} alt = "BGImg"  className='Background-Image'/>
        </div>
        <div className='Login-details-container'>
          {error &&  <h4 className = "error-message">{error}</h4>}
          <div className='text-fields'>
              <label className='Label-name'>Email</label>
              <input type = "email" 
              className='inputs'
              value = {user.email}
              onChange = {(e) => setUser({...user, email : e.target.value})}
              />
          </div> 
          <div className='text-fields'>
              <label className='Label-name'>Password</label>
              <input type = "password" 
               className='inputs'
               value = {user.password}
              onChange = {(e) => setUser({...user, password : e.target.value})}
               />
          </div> 
          <div className='Extra-details'>
              <button className='Login-btn' onClick={loginHandler}>Login In</button>
              <div className = "user_help" >
                  <span className='FPass' onClick={() => navigate("/forgotPassword")}>Forgot Password</span>
                  <span className='nacc' onClick = {()=> navigate("SignUp")}>create new account</span>
              </div>
          </div>
        </div>
    </div>
  )
}
