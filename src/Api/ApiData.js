
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Data: [],
}

export const ApiData = createSlice({
  name: 'Api',
  initialState,
  reducers: {
    Update: (state,actions) => {
      state.Data = actions.payload;
    },
    
  },
})


export const { Update } = ApiData.actions

export default ApiData.reducer