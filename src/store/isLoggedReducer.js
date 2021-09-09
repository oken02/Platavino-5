import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { login } from "../utils/login";

export const setIsLogged = createAction("SET_IS_LOGGED");

export const sendValidation = createAsyncThunk("SEND_VALIDATION", () => {
  return login().then(({ data }) => data);
});

const isLoggedReducer = createReducer(
  {
    validated: false,
    isAuthenticated: false,
    data: {},
  },
  {
    [setIsLogged]: (state, { payload: user }) => {
      return user;
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
