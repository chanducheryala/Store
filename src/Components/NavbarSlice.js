
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCategory: " ",
}

export const NavbarSlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    changeCategory : (state,actions) => {
        state.selectedCategory = actions.payload;
    },
    
  },
})


export const { changeCategory} = NavbarSlice.actions

export default NavbarSlice.reducer