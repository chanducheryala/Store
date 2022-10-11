import React from 'react'
import Cancel from '../assets/cancel.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import addIcon from '../assets/plus.png'
import removeIcon from '../assets/minus.png'
import { ItemsCount } from '../reducers/CartItemsSlice'
import { ItemsInCart } from '../reducers/CartItemsSlice'
import { ItemsRemoveCount } from '../reducers/CartItemsSlice'


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
  const itemId = details.id
  const TarObj = products.filter((pt) => pt.id === itemId)[0]

  if(TarObj.quantity > 1) {
    const newData = products.map(pt => {
    if(pt.id === itemId) {
          const updatedObj = {...pt, quantity : pt.quantity - 1};
          return updatedObj;
        }  else {
          return pt;
        }
      
    })
    dispatch(ItemsInCart(newData))
    dispatch(ItemsRemoveCount());
  }
  if(TarObj.quantity === 1) {
    const newData = products.filter(pt => pt.id !== itemId)
    dispatch(ItemsInCart(newData));
    dispatch(ItemsRemoveCount());
  }

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
            return <div key = {details.id} className="Product">
                <div className = "cart-product-img">
                   <img src = {details.image} style= {{width : '6rem', paddingLeft: '1rem' }}/>
                </div>
                <div className='product-details'>
                  <span >{details.title}</span>
                  <span >{details.quantity}</span>
                </div>
                <div className='add-remove-icons'>
                    <img src = {addIcon} style={{width: "2rem"}} onClick={() => cartHandler(details)}/>
                    <img src = {removeIcon} style={{width: "2rem"}} onClick={() => removeHandler(details)}/>
                </div>
              </div> 
          })
  
        }
      </div>
    </div>
  )
}
