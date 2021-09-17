import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setActions = createAction("SET_ACTIONS");

// export const getCart = createAsyncThunk("GET_CART", (id, thunkAPI) => {
//   return axios.get(`http://localhost:3001/api/carritos/${id}`).then((res) => {
//     return res.data;
//   });
// });

const modalReducer = createReducer(
  {
    // data: {},
  },
  {
    [setActions]: (state, { payload }) => {
      // return action.payload;
      console.log("MODALLLL", payload);
      state.actions = payload;
    },
  }
);

export default modalReducer;
