import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "GET_PRODUCTS",
  (data, thunkAPI) => {
    const { products } = thunkAPI.getState();

    if (products.length === 0) {
      console.log("THUNK API GET VINOS");

      return axios
        .get("http://localhost:3001/api/vinos")
        .then((res) => res.data);
    } else {
      console.log("THUNK API RESOLVED");

      thunkAPI.fulfillWithValue(products);
    }
  }
);
export const addProduct = createAction("ADD_PRODUCT");
export const updateProduct = createAction("UPDATE_PRODUCT");

// export const deleteProduct = createAction("DELETE_PRODUCT");

export const deleteProduct = createAsyncThunk("DELETE_PRODUCT", (id) => {
  return axios
    .delete("http://localhost:3001/api/vinos/" + id)
    .then((res) => {
      console.log("VINO ELIMINADO", id);
    })
    .then(() => id);
});

const ProductsReducer = createReducer([], {
  [getProducts.fulfilled]: (state, { payload }) => {
    console.log("MY VINOS REDUCER");
    return payload;
  },

  [deleteProduct.fulfilled]: (state, { payload: id }) => {
    return state.filter((product) => product.id !== id);
  },
  [updateProduct]: (state, { payload: productUpdated }) => {
    const idx = state.findIndex((p) => p.id == productUpdated.id);
    console.log("UPDATE IDXXXXXX", idx);

    state[idx] = productUpdated;
  },

  [addProduct]: (state, { payload: product }) => {
    state.push(product);
  },
});

export default ProductsReducer;
