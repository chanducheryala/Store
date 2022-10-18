import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { changeCategory } from '../reducers/NavbarSlice'
import { Update } from '../reducers/ApiSlice'
import { ItemsCount } from '../reducers/CartItemsSlice'
import { ItemsInCart } from '../reducers/CartItemsSlice'
import ratingIcon from '../assets/rating.png'
import { useNavigate } from 'react-router-dom'
import { utils } from '../utils/utils'
import { BackButton } from '../utils/BackButton'

export const ShoppingList = () => {
    const { category } = useParams();
    const ShopList = useSelector(state => state.Apidata.Data)
    const CategorySelected = useSelector(state => state.NavBar.selectedCategory);
    const products = useSelector(state => state.CartItems.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products`)
        .then(resp => resp.data)
        .then(resp => {
          dispatch(Update(resp));
        })
        .catch(err => console.log(err.staus))
        
    },[category])
  
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
           const obj = [...products, {...details, quantity : 1}];
           dispatch(ItemsInCart(obj));
         
        }
    }
  return (
   <div>
       <BackButton />
       <div className='Shop-List'>
        {
            ShopList && ShopList.map(details =>{
              if(details.category === CategorySelected) 
              return <div className='Shop-Item' key={details.id} >
                   <div className='Rating'>
                      <img src = {ratingIcon} alt = "rating-logo" style={{width : "9%"}}/>
                      <h5 >{details.rating.rate}</h5>
                  </div>
                 <div className='product-image'>
                    <img src = {details.image} alt = "productImage" style = {{width: '10rem'}}/>
                 </div>
                 <div className='product-title'>
                       <span>{details.title}</span>
                 </div>
                 <div className='price-details'>
                      <h5>{`$ ${details.price}`}</h5>
                      <h5 style={{textDecorationLine: 'line-through'}}> 
                      {` $ ${2 * details.price }`}
                      </h5>
                      <h6 style={{color :'orange'}}>{`(50% OFF)`}</h6>
                  </div>
                 <div className='cart-btn-container'>
                   <button className='cart-btn' onClick={() => cartHandler(details)}>Add to Cart</button>
                   <button className='cart-btn' onClick={() =>navigate(`${details.id}`)}>view</button>
                </div>
              </div>
            })
        }
    </div>
   </div>
  )
}



// import axios from 'axios'
// import React from 'react'
// import { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { changeCategory } from './NavbarSlice'
// import { Update } from '../Api/ApiData'
// import { ItemsCount } from './CartItemsSlice'
// import { ItemsInCart } from './CartItemsSlice'
// import ratingIcon from '../assets/rating.png'
// import { useNavigate } from 'react-router-dom'
// import { utils } from './utils'

// export const ShoppingList = () => {
//     const { category } = useParams();
//     const ShopList = useSelector(state => state.Apidata.Data)
//     const selectedCategory = useSelector(state => state.NavBar.selectedCategory);
//     const products = useSelector(state => state.CartItems.cartItems);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     useEffect(()=> {
//         axios.get(`https://fakestoreapi.com/products`)
//         .then(resp => resp.data)
//         .then(resp => {
//             const newData = resp.map(product => ({...product, quantity : 0}))
//             dispatch(Update(newData));
//            if( category === "MensClothing")
//              dispatch(changeCategory(utils.MENS_CLOTHING))
//            else if( category === "WomensClothing")
//              dispatch(changeCategory(utils.WOMENS_CLOTHING))
//            else if( category === "Electronics")
//              dispatch(changeCategory(utils.ELECTRONICS))
//             else 
//             dispatch(changeCategory(utils.JEWELERY))
//         })

//         .catch(err => console.log(err.message))
        
//     },[category])
  
//     const cartHandler = (details) => {
//         dispatch(ItemsCount());
//         const itemId = details.id;
//         if(products.some(pt => pt['id'] === itemId)) {
//           const TarObj = products.filter(pt => pt.id === itemId)[0];
//           const updatedObj = {...TarObj, quantity : TarObj.quantity + 1};
//           const updatedData = products.map(pt => {
//             if(pt.id === itemId) 
//               return updatedObj;
//             return pt;
//           })

//           dispatch(ItemsInCart(updatedData));
//           console.log(products);

//         } else {
//            const obj = [...products, {...details, quantity : 1}];
//            dispatch(ItemsInCart(obj));
         
//         }
//     }
//   return (
//     <div className='Shop-List'>
//         {
//             ShopList && ShopList.map(details =>{
//               if(details.category === selectedCategory) 
//               return <div className='Shop-Item' key={details.id} >
//                    <div className='Rating'>
//                       <img src = {ratingIcon} alt = "rating-logo" style={{width : "9%"}}/>
//                       <h5 >{details.rating.rate}</h5>
//                   </div>
//                  <div className='product-image'>
//                     <img src = {details.image} alt = "productImage" style = {{width: '10rem'}}/>
//                  </div>
//                  <div className='product-title'>
//                        <span>{details.title}</span>
//                  </div>
//                  <div className='price-details'>
//                       <h5>{`$ ${details.price}`}</h5>
//                       <h5 style={{textDecorationLine: 'line-through'}}> 
//                       {` $ ${2 * details.price }`}
//                       </h5>
//                       <h6 style={{color :'orange'}}>{`(50% OFF)`}</h6>
//                   </div>
//                  <div className='cart-btn-container'>
//                    <button className='cart-btn' onClick={() => cartHandler(details)}>Add to Cart</button>
//                    <button className='cart-btn' onClick={() =>navigate(`${details.id}`)}>view</button>
//                 </div>
//               </div>
//             })
//         }
//     </div>
//   )
// }

