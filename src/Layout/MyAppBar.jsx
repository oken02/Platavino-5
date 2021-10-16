import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { MyMenu } from "./MyMenu";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import { Heading, Box, Button } from "@chakra-ui/react";

import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useFloatNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/float";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setSelectedProduct } from "../store/selectedProductReducer";
import { getBodega } from "../store/CategoriesReducer";
import { Autocomplete, TextField } from "@mui/material";
import { sendLogout } from "../store/isLoggedReducer";
import { resetCart } from "../store/addToCarrito";

const useStyles = makeStyles((theme) => ({
  menu: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
  input: {
    // margin: "auto",
  },
}));

export function MyAppBar({ handleClickLogout }) {
  const [input, setInput] = useState("");

  const lstoken = localStorage.getItem("token");
  let inputLS = localStorage.setItem("input", input);

  const classes = useStyles();
  // const lstoken = localStorage.getItem('token')

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    let value = e.target.value;
    let first = value.charAt(0).toUpperCase();
    let resto = value.slice(1);
    let finalValue = first + resto;
    setInput(finalValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/categorias/bodega/${input}`)
      .then(({ data }) => {
        dispatch(getBodega(data));
        setInput("");
        history.push(`/results`);
      })
      .catch((err) => history.push("/notfound"));
  };

  return (
    <div className={classes.root}>
      <div className={classes.offset} />
      <AppBar position="fixed" color="white">
        <Toolbar>
          <Box display="flex" alignItems="center">
            <Heading mr="2" as="h6" size="xs">
              Platavino 5
            </Heading>
            <LocalBarIcon className={classes.menuButton} />
          </Box>
          <NavMenu
            className={classes.menu}
            gutter={1}
            useStyles={useFloatNavigationMenuStyles}
          >
            <NavItem as={NavLink} to="/home">
              Vinos
            </NavItem>

            {user.isAuthenticated && (
              <>
                <NavItem as={NavLink} to="/cart">
                  Carrito
                </NavItem>
                <NavItem as={NavLink} to="/perfil/info">
                  Perfil
                </NavItem>
              </>
            )}
          </NavMenu>
          <Box display="flex" alignItems="center">
            {/* {user.validated} */}
            {/* <Heading as="h6" size="xs">
              {JSON.stringify(user.validated)}
            </Heading> */}
            {!user.validated && (
              <Heading as="h5" size="md">
                validating
              </Heading>
            )}
            {user.validated &&
              (user.isAuthenticated ? (
                <>
                  <Heading as="h4" size="md">
                    {user.data.username}
                  </Heading>

                  <Button
                    onClick={() => {
                      dispatch(sendLogout());
                      dispatch(resetCart());
                      // history.push("/login");
                    }}
                    ml="2"
                    colorScheme="purple"
                    variant="outline"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => history.push("/login")}
                    colorScheme="purple"
                    variant="outline"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => history.push("/register")}
                    ml="2"
                    colorScheme="purple"
                    variant="outline"
                  >
                    Register
                  </Button>
                </>
              ))}
          </Box>
          {/* </Form> */}
        </Toolbar>

        {/* </Flex> */}
      </AppBar>
    </div>
  );
}
