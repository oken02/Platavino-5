import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        //Aca irian los reducer de cada estado que necesitemos
    },
});

export default store