import { boxSizing } from '@mui/system'
import React, { useEffect } from 'react'
import messi from '../assets/messi.png'
import { useSelector } from 'react-redux'

export const HomePage = () => {
const emailId = useSelector(state => state.Login.user.email);

   const Modal = () => {
     setTimeout(() => {
      const content = document.getElementById('modal')
       return content.style.display = "none";
    },1000)
   }
  return (
    <div className='Home-page'>
       <div id='modal'>
            <h1 >Hello {emailId}</h1>
        </div>
        { Modal() }
        <div className='store-info'>
            <p>
                The Messi Green collection promotes the reuse of waste by re-designing deadstock (recycled) fabrics, assuming that waste is a design error and promoting the circular economy, in which, like nature, nothing is left, everything is reused.
                This collection is responsibly made in Portugal using deadstock 100% cotton, creating value for the waste generated along the production chain, reducing or eliminating waste and increasing the lifecycle of products.
            </p>
            <button className='btn'>shopping</button>
        </div>
        <div>
            <img src = {messi} alt = "messi.png"/>
        </div>
    </div>
  )
}
