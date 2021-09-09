import { createAction, createReducer } from "@reduxjs/toolkit";

export const setCarrito = createAction("SET_CARRITO");

const carritoReducer = createReducer([], {
    [setCarrito]: (state, { payload: carrito }) => {
        console.log(state)
        return [...state, carrito]
    },
});

export default carritoReducer;