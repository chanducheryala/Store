import { updatePassword } from 'firebase/auth';
import React, { useState } from 'react'
import bgImage from '../assets/bgpic.jpg'
export const ForgotPassword = () => {
    
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const signUpHandler = async() => {
        await updatePassword()
    }
  return (
    <div className='Signup'>
        <div >
          <img src = {bgImage} alt = "BGImg"  className='Background-Image'/>
        </div>
        <div className='signUp-details-container'>
          <div className='text-fields'>
              <label className='Label-name'>Email</label>
              <input type = "email" 
              className='inputs'
              value = {email}
              onChange = {e => setEmail(e.target.value)}
              />
          </div> 
          <div className='text-fields'>
              <label className='Label-name'>New Password</label>
              <input type = "password"  
              className='inputs'
              value={password}
              onChange = {e => setPassword(e.target.value)}
              />
          </div> 
          <div className='Extra-details'>
              <button className='reset-btn' onClick={signUpHandler}>Reset Password</button>
          </div>
        </div>
    </div>
  )
}
