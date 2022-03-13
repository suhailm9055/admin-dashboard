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
        state.products.findIndex((item) => item._id === action.payload)
        ,
        1
      );
    },
    deleteProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateProductStarted: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSucceed: (state, action) => {
      state.isFetching = false;
      state.products[state.products.findIndex((item) => item._id === action.payload.id)]=action.payload.products;
    },
    updateProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addProductStarted: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSucceed: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload)
    },
    addProductFailed: (state) => {
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
  updateProductStarted,
  updateProductSucceed,
  updateProductFailed,
  addProductStarted,
  addProductSucceed,
  addProductFailed,
} = productSlice.actions;
export default productSlice.reducer;
