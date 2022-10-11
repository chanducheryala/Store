import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import storeLogo from '../assets/StoreLogo.png'
import cartIcon from '../assets/shopping-cart.png'
import { useNavigate } from 'react-router-dom'
import user from '../assets/Owner.png';
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { utils } from './utils'
import { changeCategory } from '../reducers/NavbarSlice'



export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Cartdetails = useSelector(state => state.CartItems.addedCart);

    const signOutHandler = () => {
      signOut(auth);
    }
   return (
    <nav className='Navbar'>
        <div className='Store-details'>
            <img src = {storeLogo} alt = "storeLogo" style={{width: "10%"}}/>
            <span>Messi Store</span>
        </div>
        <div className='Nav-items'>
            {
                utils.map(item => {
                    return <div className='Link' onClick={() => {
                          dispatch(changeCategory(item.category));
                          navigate(`/${item.name}`)
   
                        }}>
                              <span>{item.name}</span>
                          </div>
                })
            }
            <div className='cart-details'>
                <img src = { cartIcon } alt = "cartIcon" style = {{width : '3.5rem' , height: "3rem"}} className='carT' onClick={() => navigate("/CartItems")}/>
                <span className='cartlist'>{Cartdetails}</span>
            </div>
         <div style={ { width : '10%'}} className="User-signOut">
            <img src = { user } alt = "user"  style={ { width : '80%' }}  className = "UserPIC"/>
            <div className='dropdown'>
                <button className='signOut-btn' onClick={signOutHandler}>Sign Out</button>
            </div>
        </div>
            
        </div>
    </nav>
  )
}


{/* <Link to = "/MensClothing" className='Link'>Mens Clothing</Link>
            <Link to = "/WomensClothing" className='Link'>Womens Clothing</Link>
            <Link to = "/Electronics" className='Link'>Electronics</Link>
            <Link to = "/Jewelery" className='Link'>Jewelery</Link> */}