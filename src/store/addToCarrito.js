import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// export const setCarrito = createAction("SET_CARRITO");

export const setCarrito = createAsyncThunk("SET_CARRITO", (wine, thunkAPI) => {
  const { user } = thunkAPI.getState();
  const { carritoId } = user.data;
  if (!user.data.id) throw new Error("You need to be logged in");
  return axios
    .post(`http://localhost:3001/api/carritos/${carritoId}/${wine.id}`)
    .then((res) => {
      return wine;
    });
});

export const removeCarrito = createAsyncThunk(
  "REMOVE_CARRITO",
  (wine, thunkAPI) => {
    let { user } = thunkAPI.getState();
    const { carritoId } = user.data;
    if (!user.data.id) throw new Error("no seleccionaste nada");
    return axios
      .delete(`http://localhost:3001/api/carritos/${carritoId}/${wine.id}`)
      .then((res) => wine);
  }
);

const carritoReducer = createReducer([], {
  [setCarrito.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeCarrito.fulfilled]: (state, { payload }) => {
    console.log(payload);
    return state.filter((wine) => wine.id !== payload.id);
    // return [...state, payload];
  },
});

export default carritoReducer;
