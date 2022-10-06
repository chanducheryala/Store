import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from  './Api/ApiData'
import NavBarSlice from './Components/NavbarSlice'
import CartListSlice from './Components/CartItemsSlice.js'

export const store = configureStore({
    reducer : {
        Apidata : ApiSlice,
        NavBar : NavBarSlice,
        CartItems : CartListSlice,
    }
})