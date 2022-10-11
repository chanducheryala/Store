import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userEmail : "",
   login : false,
}

export const loginSlice = createSlice({
    name : "Login",
    initialState,
    reducers : {
        userCredientails : (state, actions) => {
            state.userEmail = actions.payload;
        },
        loginStatus : state => {
            state.login = !state.login
        }
    }
})

export const { userCredientails, loginStatus }  = loginSlice.actions;
export default loginSlice.reducer;