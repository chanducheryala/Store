import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
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
import { Dropdown } from '../utils/Dropdown'
import { SearchBar } from '../Components/SearchBar'
import searchIcon from '../assets/search.svg'
import { AddModal } from './AddModal'


export const ShoppingList = () => {
    const { category } = useParams();
    const ShopList = useSelector(state => state.Apidata.Data)
    const CategorySelected = useSelector(state => state.NavBar.selectedCategory);
    const products = useSelector(state => state.CartItems.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[searchedText, setSearchedText ] = useState("");
    const [showModal , setShowModal] = useState(false);
    const [modalMessage , setModalMessage] = useState(" ");
    const [actualData, setActualData] = useState([...ShopList]);
    let LOCAL_STORAGE_KEY = "Products";


    useEffect(() => {
      const lSData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
       setActualData(lSData);
    }, [])
    
    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products`)
        .then(resp => resp.data)
        .then(resp => {
          const newData = resp.filter(item => {
            if(item.category === CategorySelected)
              return item;
          })
          dispatch(Update(newData));
          setActualData(newData)
          console.log(actualData)
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(actualData));
        })
        .catch(err => console.log(err.staus))  
    },[category])
  
    const cartHandler = (details) => {
        dispatch(ItemsCount());
        setShowModal(true);
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
        setModalMessage(details.title);
    }
 

    const filter = (filterType) => {
      let newData = [...ShopList];
      if(filterType === 1 ) {
        newData = newData.sort((item1, item2) => { return item2.price - item1.price})
        setActualData(newData);
      } else if(filterType === 2 ) {
          newData = newData.sort((item1, item2) => { return item1.price - item2.price})
          setActualData(newData);
      }
      else if(filterType === 3){
          newData = newData.sort((item1, item2) => { return item2.rating.rate - item1.rating.rate})
          setActualData(newData);
        } 
      else {
        setActualData(ShopList);
      }

    }

    useEffect(() => {
         const newData = ShopList.filter(item => {
          const newItem = item.title.toLowerCase();
          if(newItem.includes(searchedText)) 
            {
              return item;
            }
         }) 
        setActualData(newData);
    }, [searchedText])

  return (
   <div className='shopList-container'>
      <div className = "shoplist-header">
        <BackButton />
        <SearchBar 
         placeholder = "search...."
         name = "searchBar"
         icon = {searchIcon}
         value = {searchedText}
         onChange = {(e) => setSearchedText(e.target.value)}
         />
        <Dropdown filter = {filter}/>
         {showModal  && <AddModal  message = { modalMessage } time = { 2000 } isDisplay = { setShowModal }/>}
      </div>
       <div className='Shop-List'>
        {
            actualData && actualData.map(details =>{
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
                   <button className='cart-btn' onClick={() => { cartHandler(details) }}>Add to Cart</button>
                   <button className='cart-btn' onClick={() =>navigate(`${details.id}`)}>view</button>
                </div>
              </div>
            })
        }
    </div>
   </div>
  )
}

