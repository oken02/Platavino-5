import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";
// export const getCart = createAction("GET_CART");

export const getReview = createAction("GET_REVIEW");

// export const createReview = createAsyncThunk(
//   "CREATE_REVIEW",
//   ({ id, body }) => {
//     return axios
//       .post(
//         `http://localhost:3001/api/reviews/${id}`,
//         { comentario, puntaje },
//         {
//           headers: {
//             Authorization: "Bearer " + lstoken,
//           },
//         }
//       )
//       .then(({ data }) => data);
//   }
// );

const reviewReducer = createReducer([], {
  [getReview]: (state, { payload: review }) => {
    return [...state, review];
  },
  // [createReview.fulfilled]: (state, { payload }) => {

  // },
});

export default reviewReducer;
