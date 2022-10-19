import React from 'react'
import BB from "../assets/backButton.svg"
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
    const navigate = useNavigate();
  return (
    <>
        <img src= { BB } alt = "backButton" style = {{width : '3rem', marginLeft:"1rem"}}  className = "backButton" onClick = {() =>  navigate(-1)}/>
     </>
  )
}
