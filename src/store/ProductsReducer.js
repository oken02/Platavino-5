import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setProducts = createAsyncThunk("SET_SELECTED_PRODUCTS", () => {
  return axios.get("http://localhost:3001/api/vinos").then((res) => res.data);
});

const ProductsReducer = createReducer([], {
  [setProducts.fulfilled]: (state, { payload }) => {
    return payload;
  },
});

export default ProductsReducer;
