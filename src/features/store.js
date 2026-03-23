import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/addtocart'
export const store = configureStore({
  reducer: {
    cartStore: counterReducer,
  },
})