import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setProducts = createAsyncThunk("SET_SELECTED_PRODUCTS", () => {
  return axios.get("http://localhost:3001/api/vinos").then((res) => res.data);
});
export const addProduct = createAction("ADD_PRODUCT");

export const deleteProduct = createAction("DELETE_PRODUCT");

export const increaseAmount = createAsyncThunk(
  "INCREASE_AMOUNT",
  ({ card, amount, execute }) => {
    console.log("AMOUNTTTTTTTTTTTTTTTTTT", { card, amount });
    return axios
      .put(
        `http://localhost:3001/api/carritos/${card.id}`,
        {
          newCantidad: amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(({ data }) => ({ data, execute }));
  }
);

const ProductsReducer = createReducer([], {
  [setProducts.fulfilled]: (state, { payload }) => {
    return payload;
  },
  [addProduct]: (state, { payload: product }) => {
    return [...state, product];
  },
  [deleteProduct]: (state, { payload: data }) => {
    return {
      ...state.products.filter((product) => {
        return product.id !== data.id;
      }),
    };
  },
  // [increaseAmount.fulfilled]:
  //   (state,
  //   ({ payload }) => {
  //     console.log("INCREMENTADO", payload);
  //   })=>{

  //   },

  [increaseAmount.fulfilled]: (state, { payload }) => {
    console.log("INCREMENTADO", payload.data);
    payload.execute();
  },
});

export default ProductsReducer;
