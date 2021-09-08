import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import carritoReducer from "./addToCarrito";
import isLoggedReducer from "./isLoggedReducer";
import isLogged from "./isLoggedReducer";
import ProductsReducer from "./ProductsReducer";
import selectedProductReducer from "./selectedProductReducer";
import usersReducer from "./usersReducer";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        //Aca irian los reducer de cada estado que necesitemos
        products: ProductsReducer,
        selectedProduct: selectedProductReducer,
        isLogged: isLoggedReducer,
        users: usersReducer,
        carrito: carritoReducer,
    },
});

export default store