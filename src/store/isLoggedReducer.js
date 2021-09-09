import { createAction, createReducer } from "@reduxjs/toolkit";

export const setIsLogged = createAction("SET_IS_LOGGED");

const isLoggedReducer = createReducer([], {
    [setIsLogged]: (state, { payload: user }) => {
        return user;
    },
});

export default isLoggedReducer;