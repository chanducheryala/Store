import React, { Suspense } from 'react'
import { Login } from '../Auth/Login'
import { HomePage } from './HomePage'

export const DisplayComponent = ({Owner}) => {
  const isLoggedIn = (Owner) =>{
      return Owner ? <HomePage /> : <Login />
  }
  return (
          <>
               {isLoggedIn(Owner)}
          </>
  )
}
