import React from 'react'
import { CustomButton } from '../Components/CustomButtom'
import { useState } from 'react'
import { dropdownItems } from './DropdownItems'


export const Dropdown = ({filter}) => {
  const [ selectedFiler, setSelectedFiler ] = useState(" ");
  

  const clickHandler = () => {
     if(document.getElementById('dropdown-container').style.display === "none") {
      document.getElementById('dropdown-container').style.display = "block";
     } else 
     document.getElementById('dropdown-container').style.display = "none";
  }
 
  return (
    
    <div className='dropDown'> 
        <CustomButton name='dropdown-btn' onClick={clickHandler} > Sort by : {selectedFiler}</CustomButton>
        <div id = "dropdown-container" style={{position: "absolute", zIndex: '2000', display :"none"}}>
           <div className='dropdown-items'>
              {
              dropdownItems.map(item => {
                return <span  className = "dropdown-item" key = {item.id} onClick={() => (filter(item.id) ,setSelectedFiler(item.name))}> 
                            <span> {item.name}</span>
                        </span>
              })}
           </div>
        </div>
    </div>
  )
}
