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
      .then((res) => wine.id);
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
      return res.data;
    });
});

const carritoReducer = createReducer([], {
  [setCarrito.fulfilled]: (state, { payload }) => {
    console.log('CARITEMDB', payload)
    return [...state, payload];
  },
  [removeCarrito.fulfilled]: (state, { payload }) => {
    return state.filter((wine) => wine.id !== payload);
  },
  [getCart.fulfilled]: (state, { payload }) => {
    console.log("soy apyload", payload);
    return payload;
  },
});

export default carritoReducer;
