import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setProducts = createAction("SET_SELECTED_PRODUCTS");

// export const setProduct = createAsyncThunk("SET_PRODUCTS", () => {
//   axios
//     .get("http://localhost:3001/api/vinos")
//     .then((res) => res.data)
//     .catch((e) => console.log(e));
// });

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
