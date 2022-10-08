import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import storeLogo from '../assets/StoreLogo.png'
import cartIcon from '../assets/shopping-cart.png'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
    const Cartdetails = useSelector(state => state.CartItems.addedCart);
    
  return (
    <nav className='Navbar'>
        <div className='Store-details'>
            <img src = {storeLogo} alt = "storeLogo" style={{width: "10%"}}/>
            <span>Messi Store</span>
        </div>
        <div className='Nav-items'>
            <Link to = "/MensClothing" className='Link'>Mens Clothing</Link>
            <Link to = "/WomensClothing" className='Link'>Womens Clothing</Link>
            <Link to = "/Electronics" className='Link'>Electronics</Link>
            <Link to = "/Jewelery" className='Link'>Jewelery</Link>
            <div className='cart-details'>
                <img src = { cartIcon } alt = "cartIcon" style = {{width : '3.5rem' , height: "3rem"}} className='carT' onClick={() => navigate("/CartItems")}/>
                <span className='cartlist'>{Cartdetails}</span>
            </div>
            
        </div>
    </nav>
  )
}
