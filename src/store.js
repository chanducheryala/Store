import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from  './reducers/ApiSlice'
import NavBarSlice from './reducers/NavbarSlice'
import CartListSlice from './reducers/CartItemsSlice.js'
import loginSlice from "./reducers/loginSlice";

export const store = configureStore({
    reducer : {
        Apidata : ApiSlice,
        NavBar : NavBarSlice,
        CartItems : CartListSlice,
        Login : loginSlice
    }
})