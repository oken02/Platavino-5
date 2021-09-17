import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
const lstoken = localStorage.getItem("token");
// export const setCarrito = createAction("SET_CARRITO");

export const setCarrito = createAsyncThunk(
  "SET_CARRITO",
  ({ wine, cantidad }, thunkAPI) => {
    console.log();
    const { user } = thunkAPI.getState();

    const { carritoId } = user.data;
    if (!user.data.id) throw new Error("You need to be logged in");

    return axios
      .post(
        `http://localhost:3001/api/carritos/${wine.id}`,
        { cantidad },
        {
          headers: {
            Authorization: "Bearer " + lstoken,
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
  [setCarrito.fulfilled]: (state, { payload }) => {
    console.log("CARITEMDB", payload);
    return [...state, payload];
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
});

export default carritoReducer;
