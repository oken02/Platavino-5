import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSelectedProduct = createAction("SET_SELECTED_PRODUCT");

const selectedProductReducer = createReducer([], {
  [setSelectedProduct]: (state, { payload: product }) => {
    return product;
  },
});

export default selectedProductReducer;
