import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
// export const getCart = createAction("GET_CART");

export const getCart = createAsyncThunk("GET_CART", (id, thunkAPI) => {
  return axios.get(`http://localhost:3001/api/carritos/${id}`).then((res) => {
    return res.data;
  });
});



const carritoReducer = createReducer([], {
  [getCart.fulfilled]: (state, action) => {
    // return action.payload;
  },

});

export default carritoReducer;
