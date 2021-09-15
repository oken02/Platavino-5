import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
const lstoken = localStorage.getItem("token");
// export const setCarrito = createAction("SET_CARRITO");

export const setCarrito = createAsyncThunk("SET_CARRITO", (wine, thunkAPI) => {
  const { user } = thunkAPI.getState();

  const { carritoId } = user.data;
  if (!user.data.id) throw new Error("You need to be logged in");
  return axios
    .post(
      `http://localhost:3001/api/carritos/${wine.id}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + lstoken,
        },
      }
    )
    .then((res) => {
      console.log("data", res.data);
      return res.data;
    });
});

export const removeCarrito = createAsyncThunk(
  "REMOVE_CARRITO",
  (wine, thunkAPI) => {
    let { user } = thunkAPI.getState();
    const { carritoId } = user.data;
    if (!user.data.id) throw new Error("no seleccionaste nada");
    return axios
      .delete(`http://localhost:3001/api/carritos/${wine.id}`, {
        headers: {
          Authorization: "Bearer " + lstoken,
        },
      })
      .then((res) => res.data);
  }
);
export const getCart = createAsyncThunk("GET_CART", (id, thunkAPI) => {
  return axios
    .get(`http://localhost:3001/api/carritos`, {
      headers: {
        Authorization: "Bearer " + lstoken,
      },
    })
    .then((res) => {
      console.log("este es el res", res.data);
      return res.data;
    });
});

const carritoReducer = createReducer([], {
  [setCarrito.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeCarrito.fulfilled]: (state, { payload }) => {
    console.log(payload);
    return state.filter((wine) => wine.id !== payload.id);
    // return [...state, payload];
  },
  [getCart.fulfilled]: (state, { payload }) => {
    return payload.vinosDB;
  },
});

export default carritoReducer;
