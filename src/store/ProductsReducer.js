import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setProducts = createAsyncThunk("SET_SELECTED_PRODUCTS", () => {
  return axios.get("http://localhost:3001/api/vinos").then((res) => res.data);
});
export const addProduct = createAction('ADD_PRODUCT')

export const deleteProduct = createAction('DELETE_PRODUCT')

const ProductsReducer = createReducer([], {
  [setProducts.fulfilled]: (state, { payload }) => {
    return payload;
  },
  [addProduct]: (state, { payload: product }) => {
    return [...state, product]
  },
  [deleteProduct]: (state, { payload: data }) => {
    return {
      ...state.products.filter(product => {
        return product.id !== data.id
      })
    }
  }
});

export default ProductsReducer;
