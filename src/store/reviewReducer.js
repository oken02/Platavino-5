import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";
// export const getCart = createAction("GET_CART");

export const getReview = createAction("GET_REVIEW");

const reviewReducer = createReducer([], {
  [getReview]: (state, { payload: review }) => {
    return [...state, review];
  },
});

export default reviewReducer;
