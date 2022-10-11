import React, { useState } from 'react'
import bgImage from '../assets/bgpic.jpg'
import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'


export const SignUp = () => {

   const [user, setUser ] = useState(
     {
        username : "",
        email : "",
        password : ""
     }
   )
    const signUpHandler = async() => {
       const owner = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
       )
       console.log(owner);
    }
  return (
    <div className='Signup'>
        <div >
          <img src = {bgImage} alt = "BGImg"  className='Background-Image'/>
        </div>
        <div className='signUp-details-container'>
          <div className='text-fields'>
              <label className='Label-name'>UserName</label>
              <input type = "text" 
              className='inputs'
              value = {user.username}
              onChange = {(e) => setUser({...user, username : e.target.value})}
              />
          </div> 
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
              <button className='signUp-btn' onClick={signUpHandler}>Sign Up</button>
          </div>
        </div>
    </div>
  )
}
