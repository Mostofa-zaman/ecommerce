import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  addTocart:(state , action)=>{
    state. value = action.payload
  }
  },
})
export const { addTocart } = counterSlice.actions

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer