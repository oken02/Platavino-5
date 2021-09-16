import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setCategories = createAsyncThunk(
  "SET_CATEGORIES",
  (categories, thunkAPI) => {
    const { Precio, PaisDeOrigen, Varietal, Color } = categories;
    let pedido = `http://localhost:3001/api/categorias?`;

    let keys = Object.keys(categories);
    let values = Object.values(categories);
    keys.map((key, i) => {
      pedido = `${pedido}${key}=${values[i]}&`;
    });
    console.log("el pedidooo", pedido);

    return axios.get(pedido).then((res) => res.data);
  }
);

const CategoriesReducer = createReducer([], {
  [setCategories.fulfilled]: (state, { payload }) => {
    return payload;
  },
});

export default CategoriesReducer;
