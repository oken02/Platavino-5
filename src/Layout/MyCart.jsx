import { Heading, Text } from "@chakra-ui/layout";
import { Box, Grid, Paper } from "@material-ui/core";
// import { Box as BoxCk } from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon, CloseIcon } from "@chakra-ui/icons";
import { Tag } from "@chakra-ui/tag";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeCarrito } from "../store/addToCarrito";
import { makeStyles } from "@material-ui/core";
import { FilterSidebar } from "./FilterSidebar";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useIncrease } from "../hooks/useIncrease";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { CartItem } from "./CartItem";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
  },
  space: {
    width: "45%",
    marginRight: "15px",
  },
  paper: {
    height: "100vh",
  },
  // column: {
  //   width: "30%",
  //   height: "50vh",
  //   marginLeft: "10px",
  //   borderRadius: "3px",
  // },
  root: {
    minWidth: 275,
    width: "100%",
  },
  title: {
    fontSize: 14,
  },
  subtotal: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
export const MyCart = () => {
  const [total, setTotal] = useState(0);
  const [evt, setEvt] = useState(false);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const cart = useSelector((state) => state.carrito);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    // let suma = kev.map((wine) => wine.vino.Precio);
    console.log("RE RENDER MY CART");

    let totalALGo = 0;

    for (const cartItem of cart) {
      totalALGo += cartItem.vino.precio * cartItem.cantidad;
    }

    setTotal(totalALGo);
  }, [cart]);

  return (
    <div className={classes.div}>
      <Grid container spacing={2}>
        <Grid item container md={8} lg={8}>
          {!cart.length && (
            <Alert status="info" colorScheme="purple" justifyContent="center">
              <AlertIcon />
              No tienes nada en tu carrito
            </Alert>
          )}
          {cart.map((card, i) => {
            console.log("este es el card de map", card);
            return (
              <Grid item md={12} lg={12}>
                <CartItem card={card} />
                <br />
              </Grid>
            );
          })}
        </Grid>

        <Grid item md={4} lg={4}>
          <Card className={(classes.root, classes.column)}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Your Products:
              </Typography>

              <div className={classes.subtotal}>
                <h5>Total:</h5>
                <span>$ {total}</span>
              </div>
            </CardContent>
            <CardActions>
              {/* <Button size="small" onClick={() => history.push("/checkout")}>
                Comprar
              </Button> */}
              <Button
                // mx={4}
                flex={1}
                colorScheme="purple"
                // width="100%"
                size="md"
                onClick={() => history.push("/checkout")}
              >
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
