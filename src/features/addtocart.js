import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTocart } = cartSlice.actions;
export default cartSlice.reducer;