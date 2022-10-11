import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user : {
     email : "",
     password : ""
   },
   login : false,
}

export const loginSlice = createSlice({
    name : "Login",
    initialState,
    reducers : {
        userEmail : (state, actions) => {
            state.user.email = actions.payload;
        },
        userPassword : (state, actions) => {
            state.user.password = actions.payload;
        },
        loginStatus : (state,actions) => {
            state.login = actions.payload;
        }
    }
})

export const { userEmail, userPassword, loginStatus }  = loginSlice.actions;
export default loginSlice.reducer;