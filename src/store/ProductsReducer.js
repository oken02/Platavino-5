import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setProducts = createAction("SET_SELECTED_PRODUCTS");

const ProductsReducer = createReducer([], {
  [setProducts]: (state, { payload: products }) => {
    return products;
  },
  //   [setProduct.fulfilled]: (state, { payload: products }) => {
  //     console.log(products);
  // return products;
  //   },
});

export default ProductsReducer;
