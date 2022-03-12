import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: null,
    error: null,
  },
  reducers: {
    getProductStarted: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSucceed: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteProductStarted: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSucceed: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id == action.payload)
        ,
        1
      );
    },
    deleteProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStarted,
  getProductSucceed,
  getProductFailed,
  deleteProductStarted,
  deleteProductSucceed,
  deleteProductFailed,
} = productSlice.actions;
export default productSlice.reducer;
