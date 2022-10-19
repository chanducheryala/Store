import ProtoTypes from 'prop-types'
import React from 'react'


export const SearchBar = ({
  value,
  onChange,
  placeholder,
  name,
  submitHandler,
  icon
}) => {
  return (
    <form onSubmit={submitHandler}>
      <input 
          type = "search"
          className={name}
          placeholder = {placeholder}
          onChange = {onChange}
          value = {value}
          style = {{height: "3rem",
            width:"20rem",
            backgroundImage : `url(${icon})`,
            backgroundRepeat :"no-repeat",
            backgroundPosition: "center right",
            paddingRight: '2rem',
            fontSize :'1rem',
            outline :"none",
            border:"0.5px solid black",
            borderRadius: "0.5rem",
            paddingLeft: '0.5rem',
            }}
          
      />
    </form>
  )
}

SearchBar.ProtoTypes = {
  value : ProtoTypes.string,
  onChange : ProtoTypes.string,
  placeholder : ProtoTypes.string,
  name :ProtoTypes.string,
  submitHandler : ProtoTypes.func,
  icon : ProtoTypes.object
}