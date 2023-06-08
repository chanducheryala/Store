import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { BackButton } from '../utils/BackButton';


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
      <div style = {{
         position: "absolute",
         left: "1rem",
         top: "1rem"
      }}>
          <BackButton />
      </div>
        <div>
             {
                Product && Product.map((item ) => {
                    return <div className='selected-Product-details' key = {item.id}>
                                <div className='selected-Product-image' >
                                   <img src = {item.image} alt= "productDetails" style={{width:"15rem", border: '1px solid lightgray', padding:'3rem', borderRadius:'0.5rem'}} />
                                </div>
                                <div className='selected-Product-description'>
                                    <h3>{item.title}</h3>
                                    <h5>{item.description}</h5>
                                </div>
                           </div>
                })
             }
        </div>
    </div>
  )
}
