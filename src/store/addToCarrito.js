import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

// const lstoken = localStorage.getItem("token");
// export const setCarrito = createAction("SET_CARRITO");

export const resetCart = createAction("RESET_CART");

export const addCartItem = createAsyncThunk(
  "ADD_CART_ITEM",
  ({ vinoId, cantidad }, thunkAPI) => {
    const { user } = thunkAPI.getState();

    return axios
      .post(
        `http://localhost:3001/api/carritos/${vinoId}`,
        { cantidad },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log("RESPUESTAAA RES", res);
        return res.data;
      });
  }
);

export const removeCarrito = createAsyncThunk(
  "REMOVE_CARRITO",
  (wine, thunkAPI) => {
    let { user } = thunkAPI.getState();
    const { carritoId } = user.data;
    if (!user.data.id) throw new Error("no seleccionaste nada");
    return axios
      .delete(`http://localhost:3001/api/carritos/${wine.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => wine.id);
  }
);

export const getCart = createAsyncThunk("GET_CART", (id, thunkAPI) => {
  const { carrito } = thunkAPI.getState();
  if (carrito.length !== 0) return carrito;

  return axios
    .get(`http://localhost:3001/api/carritos`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      return res.data;
    });
});

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
      .then(({ data }) => ({ card, amount }));
  }
);

const carritoReducer = createReducer([], {
  [addCartItem.fulfilled]: (state, { payload: { cartItem, created } }) => {
    console.log("CARITEM DB", cartItem);
    if (!created) return;
    // if (created) {
    state.push(cartItem);
    // }
    // return [...state, payload];
  },
  [removeCarrito.fulfilled]: (state, { payload }) => {
    return state.filter((wine) => wine.id !== payload);
  },
  [getCart.fulfilled]: (state, { payload }) => {
    console.log("soy apyload", payload);
    return payload;
  },

  [increaseAmount.fulfilled]: (state, { payload }) => {
    console.log("INCREMENTADO", payload.card);
    // payload.execute();

    const car = state.findIndex((c) => {
      return c.id == payload.card.id;
    });
    state[car].cantidad = payload.amount;
    console.log("PROXIIII", state);
    // return state;
  },
  [resetCart]: () => {
    return [];
  },
});

export default carritoReducer;
