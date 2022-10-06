import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  addedCart : 0,
  cartItems : []
}

export const CartItemsSlice = createSlice({
  name: 'CartItems',
  initialState,
  reducers: {
    ItemsCount : state => {
        state.addedCart = state.addedCart + 1;
    },

    ItemsInCart : (state,actions) => {
        state.cartItems = actions.payload;
    },
    ItemsRemoveCount : state => {
      state.addedCart = state.addedCart - 1; 
    }
  },
})


export const { ItemsCount , ItemsInCart , ItemsRemoveCount} = CartItemsSlice.actions

export default CartItemsSlice.reducer