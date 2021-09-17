import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter } from "react-router-dom";

import { NotFound } from "./components/NotFound";
import MyHeader from "./Layout/MyHeader";
import MyVino from "./Layout/MyVino";
import MyCarousel from "./Layout/MyCarousel";
import { MyContainer } from "./Layout/MyContainer";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepPurple, purple } from "@material-ui/core/colors";
import { ChakraProvider } from "@chakra-ui/react"
import { Checkout } from "./Layout/Checkout";

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
  },
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <ChakraProvider>
      <App />

    </ChakraProvider>

      </ThemeProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
