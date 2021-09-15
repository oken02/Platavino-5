import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
// export const getCart = createAction("GET_CART");

export const setPrecio = createAsyncThunk("SET_PRECIO", (precio, thunkAPI) => {
  //   return axios.get(`http://localhost:3001/api/carritos/${id}`).then((res) => {
  //     return res.data;
  //   });
  return precio;
});

let initialValue = {
  Precio: "",
  Varietal: "",
  PaisDeOrigen: "",
  Color: "",
};

const CategoriesReducer = createReducer(initialValue, {
  [setPrecio.fulfilled]: (state, { payload }) => {
    console.log("esacaaaaaaaa", payload);
  },
});

export default CategoriesReducer;
