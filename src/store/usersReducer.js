import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUsers = createAction("SET_USERS");

const usersReducer = createReducer([], {
  [setUsers]: (state, { payload: users }) => {
    return users;
  },
});

export default usersReducer;
