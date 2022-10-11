import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/bgpic.jpg'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config' 
import { userCredientails } from '../reducers/loginSlice'
import { useDispatch , useSelector } from 'react-redux'
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector(state => state.Login.userEmail);

  const [user, setUser ] = useState(
    {
       email : "",
       password : ""
    }
  )

  const loginHandler = () => {
      
  }
    
  return (
    <div className='Login'>
        <div >
          <img src = {bgImage} alt = "BGImg"  className='Background-Image'/>
        </div>
        <div className='Login-details-container'>
         
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
              <span className='FPass'>Forgot Password</span>
              <span className='nacc' onClick = {()=> navigate("SignUp")}>create new account</span>
          </div>
        </div>
    </div>
  )
}
