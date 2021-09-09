import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_SELECTED_PRODUCT");

const ProductsReducer = createReducer([], {
    [setProducts]: (state, { payload: products }) => {
        return products;
    },
});

export default ProductsReducer;