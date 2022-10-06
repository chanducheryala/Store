import React from 'react'
import Cancel from '../assets/cancel.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import addIcon from '../assets/plus.png'
import removeIcon from '../assets/minus.png'
import { ItemsCount } from './CartItemsSlice'
import { ItemsInCart } from './CartItemsSlice'
import { ItemsRemoveCount } from './CartItemsSlice'
import emptyCart from "../assets/emptyCart.png"

export const CartList = () => {
  const Items = useSelector(state => state.CartItems.cartItems);
  const products = useSelector(state => state.CartItems.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartHandler = (details) => {
    dispatch(ItemsCount());
    const itemId = details.id;
    if(products.some(pt => pt['id'] === itemId)) {
      const TarObj = products.filter(pt => pt.id === itemId)[0];
      const updatedObj = {...TarObj, quantity : TarObj.quantity + 1};
      const updatedData = products.map(pt => {
        if(pt.id === itemId) 
          return updatedObj;
        return pt;
      })

      dispatch(ItemsInCart(updatedData));
      console.log(products);

    } else {
       const obj = [...products, details];
       dispatch(ItemsInCart(obj));
     
    }
}

const removeHandler = (details) =>{ 
  const itemId = details.id;
  const TarObj = products.filter(pt => pt.id === itemId)[0];
  const newObj = (TarObj.quantity >= 1) ? {...TarObj, quantity : TarObj.quantity - 1} : {...TarObj, quantity : 0};
  if(TarObj.quantity >= 1){
    dispatch(ItemsRemoveCount());
  }
  const newData = products.map(pt =>{
    if(pt.id === itemId) 
      return newObj
    return pt;
  })
  dispatch(ItemsInCart(newData))

  console.log(products);

}
  return (
    <div className='cart-Items'>
      <div className='cartList-header'>
        <h1>Cart Items</h1>
        <img src = { Cancel } alt = "cancel" className='cancel-Icon' onClick={() => navigate(-1)}/>
      </div>
      <div className='Products'>
        {
          Items.map((details) => {
            return details.quantity !== 0 && <div key = {details.id} className="Product">
                <div className = "cart-product-img">
                   <img src = {details.image} style= {{width: "50%"}}/>
                </div>
                <div className='product-details'>
                  <span >{details.title}</span>
                  <span >{details.quantity}</span>
                </div>
                <div className='add-remove-icons'>
                    <img src = {addIcon} style={{width: "8%"}} onClick={() => cartHandler(details)}/>
                    <img src = {removeIcon} style={{width: "8%"}} onClick={() => removeHandler(details)}/>
                </div>
              </div> 
          })
  
        }
      </div>
    </div>
  )
}