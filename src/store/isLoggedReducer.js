
import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";
import { login } from "../utils/login";

const AuthorizationHeader = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

export const sendValidation = createAsyncThunk(
  "SEND_VALIDATION",
  (data, thunkAPI) => {
    const token = localStorage.getItem("token");

    if (!token) return thunkAPI.rejectWithValue();

    return axios
      .post("http://localhost:3001/api/auth/validate", {}, AuthorizationHeader)
      .then(({ data }) => data);
  }
);

export const sendLogin = createAsyncThunk("SEND_LOGIN", (credd) => {
  return axios
    .post("http://localhost:3001/api/auth/login", credd)
    .then(({ data }) => data);
});

export const setIsLogged = createAction("SET_IS_LOGGED");
export const sendLogout = createAction("SEND_LOGOUT");

const isLoggedReducer = createReducer(
  {
    validated: false,
    isAuthenticated: false,
    data: {},
  },
  {
    [setIsLogged]: (state, { payload: user }) => {
      console.log(state);
      return user;
    },

    [sendLogout]: (state, { payload: user }) => {
      localStorage.removeItem("token");
      state.data = {};
      state.validated = true;
      state.isAuthenticated = false;
    },
    [sendLogin.fulfilled]: (user, action) => {
      localStorage.setItem("token", action.payload.token);
      user.data = action.payload.user;
      user.isAuthenticated = true;
    },

    [sendLogin.rejected]: (state, action) => {
      state.isAuthenticated = false;
    },

    [sendValidation.fulfilled]: (user, action) => {
      user.data = action.payload.user;
      user.validated = true;
      user.isAuthenticated = true;
    },

    [sendValidation.rejected]: (state, action) => {
      localStorage.removeItem("token");
      state.validated = true;
      state.isAuthenticated = false;
    },
  }
);

export default isLoggedReducer;
