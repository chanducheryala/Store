import React from 'react'
import ProtoTypes from 'prop-types'

export const CustomButton = ({
    name,
    onClick,
    children,
}) => {

  return (
    <button
      className={name}
      onClick = {onClick}
      style = {{height : '2.5rem',
      width : '11rem',
      textAlign: "start",
      backgroundColor : "white",
      border : "0.3px solid gray",
      position : "relative",
      borderRadius: "0.5rem"
      }}
    >
      {children}
    </button>
  )
}

CustomButton.ProtoTypes = {
 name : ProtoTypes.string,
 onClick : ProtoTypes.func,
 children : ProtoTypes.string
}
