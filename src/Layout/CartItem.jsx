// import { Paper } from "@material-ui/core";
// import React from "react";

// export const CartItem = () => {
//   return (
//     <div>
//       <Paper elevation={3}>
//         <h1 style={{width:"80%"}}>paper</h1>
//       </Paper>
//     </div>
//   );
// };

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
import { useIncrease } from "../Layout/hooks/UseIncrease";
import { increaseAmount } from "../store/addToCarrito";

export const CartItem = ({ card }) => {
  const [evt, setEvt] = useState(false);

  // console.log("CANTIADDADDD",card.cantidad);
  const { amount, add, minus } = useIncrease(card.cantidad);

  // const [amount, setAmount] = useState()

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(increaseAmount({ card, amount: amount + 1 }));
    add();
  };

  const decrement = () => {
    dispatch(increaseAmount({ card, amount: amount - 1 }));
    minus();
  };

  return (
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
            <Box display="flex" justifyContent="space-between" width="100%">
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

            <Box display="flex" justifyContent="space-between" width="100%">
              <BoxCk display="flex" alignItems="center">
                {`$ ${card.vino.Precio}.00`}
              </BoxCk>
              <ButtonGroup variant="outline" spacing="6" isAttached>
                <IconButton
                  onClick={decrement}
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
                  {amount}
                </BoxCk>
                {/* <Button>Cancel</Button> */}
                <IconButton
                  onClick={increment}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                />
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
