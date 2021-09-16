import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const setUsers = createAction("SET_USERS");

export const changeUserRole = createAction('CHANGE_USER_ROLE')

export const deleteUser = createAction('DELETE_USER')

const usersReducer = createReducer([], {
  [setUsers]: (state, { payload: users }) => {
    return users;
  },
  [changeUserRole]: (state, { payload }) => {
    const index = state.findIndex((user, i) => {
      return user.id === payload.id
    })
    console.log(payload, 'STATE =>', state)
    state[index] = payload
  },
  [deleteUser]: (state, { payload: users }) => {
    return state.filter((user) => user.id !== users);
  }
});

export default usersReducer;
