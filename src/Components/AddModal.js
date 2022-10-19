import React , { useEffect, useState }from 'react'
import checkmark from '../assets/tick.svg'

export const AddModal = ({ message, time , isDisplay}) => {
    useEffect(() => {
      setTimeout(() => {
         isDisplay(false)
      }, time)
    }, [])
  return (
    <div className='cartAddModal'>
        <img src = { checkmark } alt = "checkmark" className='checkmark'/>
        <span>{ message }</span>
    </div>
  )
}
