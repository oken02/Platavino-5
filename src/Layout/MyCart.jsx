import { Heading, Text } from "@chakra-ui/layout";
import { Box, Grid, Paper } from "@material-ui/core";
import { Box as BoxCk } from "@chakra-ui/react";
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

  const kev = cart.filter((car) => {
    return car !== "";
  });

  useEffect(() => {
    // let suma = kev.map((wine) => wine.vino.Precio);
    console.log("RE RENDER MY CART");

    let totalALGo = 0;

    for (const cartItem of cart) {
      totalALGo += cartItem.vino.Precio * cartItem.cantidad;
    }

    setTotal(totalALGo);

    // setTotal(

    //   suma.reduce(function (previousValue, currentValue) {
    //     return Number(previousValue) + Number(currentValue);
    //   }, 0)

    // );
  }, [cart]);

  return (
    <div className={classes.div}>
      <Grid container spacing={2}>
        <Grid item container md={8} lg={8}>
          {cart.length
            ? kev.map((card, i) => {
                console.log("este es el card de map", card);
                // if (typeof card === 'string') {
                //   return null
                // }
                return (
                  <Grid item md={12} lg={12}>
                    <CartItem card={card} />
                  </Grid>
                );
              })
            : null}
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
              <Button size="small" onClick={() => history.push("/checkout")}>
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
