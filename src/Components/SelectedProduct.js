import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

export const SelectedProduct = () => {

    const { SelectedProduct } = useParams();
    const [Product , setProduct ] = useState([]);

    useEffect(()=> {
       axios.get(`https://fakestoreapi.com/products/${SelectedProduct}`)
       .then(resp => resp.data)
       .then(resp => {
         const selectedDetails = [...Product, resp];
         setProduct(selectedDetails);
         console.log(Product)
      })
       .catch(err => console.log(err.status))
    },[SelectedProduct])


  return (
    <div className='selected-Product'>
        <div>
             {
                Product && Product.map((item ) => {
                    return <div className='selected-Product-details'>
                                <div className='selected-Product-image'>
                                   <img src = {item.image} alt= "productDetails" style={{width:"15rem", border: '1px solid black', padding:'3rem'}} />
                                </div>
                                <div className='selected-Product-description'>
                                    <h5>{item.title}</h5>
                                    <h5>{item.description}</h5>
                                </div>
                           </div>
                })
             }
        </div>
    </div>
  )
}
