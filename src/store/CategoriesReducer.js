import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setCategories = createAsyncThunk(
  "SET_CATEGORIES",
  (categories, thunkAPI) => {
    const { Precio, PaisDeOrigen, Varietal, Color } = categories;
    return axios
      .get(
        `http://localhost:3001/api/categorias?Precio=${Precio}&PaisDeOrigen=${PaisDeOrigen}&Varietal=${Varietal}&Color=${Color}`
      )
      .then((res) => res.data);
  }
);

const CategoriesReducer = createReducer(
  {},
  {
    [setCategories.fulfilled]: (state, { payload }) => {
      return payload;
    },
  }
);

export default CategoriesReducer;
