import React from 'react'


export const Login = () => {
  return (
    <div className='Login'>
        <div className='text-fields'>
            <label className='Label-name'>Name</label>
            <input type = "text" className='inputs'/>
        </div> 
        <div className='text-fields'>
            <label className='Label-name'>Password</label>
            <input type = "password"  className='inputs'/>
        </div> 
        <div className='Extra-details'>
            <button className='Login-btn'>Login In</button>
            <span className='FPass'>Forgot Password</span>
            <span className='nacc'>create new account</span>
        </div>
    </div>
  )
}
