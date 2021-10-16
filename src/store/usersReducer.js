import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("GET_USERS", async (p, thunkAPI) => {
  const { users } = thunkAPI.getState();
  if (users.length !== 0) return users;
  return axios
    .get("http://localhost:3001/api/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(({ data }) => data);
});

export const changeUserRole = createAsyncThunk(
  "CHANGE_USER_ROLE",
  async (userId) => {
    return axios
      .put(
        `http://localhost:3001/api/auth/promover/${userId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(({ data }) => data);
  }
);

export const deleteUser = createAsyncThunk("DELETE_USER", async (userId) => {
  return axios
    .delete(`http://localhost:3001/api/users/${userId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then(({ data }) => userId);
});

const usersReducer = createReducer([], {
  [getUsers.fulfilled]: (state, { payload: users }) => {
    return users;
  },
  [changeUserRole.fulfilled]: (state, { payload: userUpdated }) => {
    const index = state.findIndex((user, i) => {
      return user.id == userUpdated.id;
    });
    // console.log(payload, "STATE =>", state);
    state[index] = userUpdated;
    // return state.filter((user) => user.id !== userId);
  },
  [deleteUser.fulfilled]: (state, { payload: userId }) => {
    return state.filter((user) => user.id !== userId);
  },
});

export default usersReducer;
