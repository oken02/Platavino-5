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
  column: {
    width: "30%",
    height: "50vh",
    marginLeft: "10px",
    borderRadius: "3px",
  },
  root: {
    minWidth: 275,
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
    let suma = cart.map((wine) => wine.vino.Precio);
    setTotal(
      suma.reduce(function (previousValue, currentValue) {
        return Number(previousValue) + Number(currentValue);
      }, 0)
    );
  }, [cart]);

  return (
    <div className={classes.div}>
      <Grid container spacing={2}>
        {cart.length
          ? cart.map((card, i) => {
              console.log("este es el card de map", card);

              return (
                <Grid item key={i} style={{ width: "95%" }}>
                  <Paper elevation={1}>
                    <Box p={2}>
                      <Grid container>
                        <Grid item md={4}>
                          <img
                            style={{ maxWidth: "100px", height: "100px" }}
                            src={card.vino.Img}
                            alt=""
                          />
                        </Grid>
                        <Grid
                          item
                          container
                          direction="column"
                          md={8}
                          justifyContent="space-between"
                          alignContent="space-between"
                        >
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            width="100%"
                          >
                            <Text
                              display="flex"
                              alignItems="center"
                              fontWeight="normal"
                              fontSize="xl"
                            >
                              {card.vino.Varietal}
                            </Text>
                            <IconButton
                              aria-label="Add to friends"
                              onClick={() => {
                                setEvt(!evt);
                                dispatch(removeCarrito(card));
                              }}
                              icon={<CloseIcon />}
                            />
                          </Box>
                          <Box
                            color="gray"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            // ml="2"
                            flex={1}
                          >
                            {card.vino.Color}
                          </Box>

                          <Box
                            display="flex"
                            justifyContent="space-between"
                            width="100%"
                          >
                            <BoxCk display="flex" alignItems="center">
                              {`$ ${card.vino.Precio}.00`}
                            </BoxCk>
                            <ButtonGroup
                              variant="outline"
                              spacing="6"
                              isAttached
                            >
                              <IconButton
                                aria-label="Add to friends"
                                icon={<MinusIcon />}
                              />
                              <BoxCk
                                // bg="purple"
                                borderWidth="1px"
                                borderRadius="lg"
                                px={4}
                                d="flex"
                                alignItems="center"
                              >
                                {card.cantidad}
                              </BoxCk>
                              {/* <Button>Cancel</Button> */}
                              <IconButton
                                aria-label="Add to friends"
                                icon={<AddIcon />}
                              />
                            </ButtonGroup>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Grid>
              );
            })
          : ""}
      </Grid>

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
    </div>
  );
};
