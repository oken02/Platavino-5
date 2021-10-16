import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Box, Grid } from "@material-ui/core";
import { Heading, Text, Box as BoxCh } from "@chakra-ui/layout";
import { Input, Textarea } from "@chakra-ui/react";

import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";

import { ReviewCard } from "./ReviewCard";
import { Tag } from "@chakra-ui/tag";
// import { Rating } from "@material-ui/lab";
// import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useSelector, useDispatch } from "react-redux";
// import { Tag } from "@chakra-ui/tag";
import { Rating } from "@material-ui/lab";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { addCartItem } from "../store/addToCarrito";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { getReview } from "../store/reviewReducer";
import { useIncrease } from "../hooks/useIncrease";
import { ReviewSection } from "./ReviewSection";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // height: "400px",
  },
  details: {
    // flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    // flex: "1 0 auto",
  },
  cover: {
    width: "300px",
    // flexGrow: 2,
    // width: "100%",
    // height: "100%",
    // objectFit: "contain",
  },

  vinoInfo: {
    // height: "400px",
  },
  tags: {
    "& > span": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  reviews: {
    margin: "0",
  },
}));

export function SingleWine() {
  const history = useHistory();
  const selected = useSelector((state) => {
    return state.selectedProduct.id;
  });
  const userLogged = useSelector((state) => {
    return state.user.data.role;
  });

  const { amount, add, minus } = useIncrease(1);

  const handleClickDelete = () => {
    axios
      .delete(`http://localhost:3001/api/vinos/borrar/${selected}`)
      .then(() => {
        console.log("eliminado");
        history.push("/home");
      })
      .catch((e) => console.log(e));
  };
  const selectedWine = useSelector((state) => state.selectedProduct);
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const {
    img,
    bodega,
    color,
    paisDeOrigen,
    varietal,
    precio,
    descripcion,
    ml,
    id,
  } = selectedWine;

  const lstoken = localStorage.getItem("token");
  const [comentario, setComentario] = useState("");
  const [puntaje, setPuntaje] = useState(4.5);
  const [reviews, setReviews] = useState([]);
  const { isAuthenticated } = useSelector((state) => state.user);
  const review = useSelector((state) => state.review);

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log("Cambio el valor input");
    setComentario(value);
  };

  const handleClick = (e) => {
    const starts = e.target.value;
    console.log("valor estrellas", starts);
    setPuntaje(starts);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/reviews/${id}`)
      .then((res) => setReviews(res.data));
  }, []);

  console.log(review);

  return (
    //     /*
    <div>
      <Grid container className={classes.vinoInfo} spacing={4}>
        <Grid item sm={6}>
          <Box>
            <img
              style={{
                width: "100%",
                height: "70vh",
                objectFit: "contain",
                borderRadius: "16px",
              }}
              src={img}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item sm={6} style={{ height: "100%" }}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            pr={4}
          >
            {/* <Typography variant="h4">Live From Space</Typography> */}
            <Heading as="h3" size="lg">
              {bodega}
            </Heading>
            <Box mt={1}></Box>
            <Rating name="stars" value={4} readOnly />
            <Box mt={1}></Box>

            <BoxCh fontSize="lg">{`$ ${precio}`} </BoxCh>

            <Box mt={1}></Box>

            <Text fontSize="md">{descripcion}</Text>
            <Box mt={1}></Box>

            <Grid container>
              <Grid item md={6} lg={6} className={classes.tags}>
                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>
                    <strong>Color</strong>
                  </p>
                  {color}
                </Tag>
                <Box mt={1}></Box>

                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>
                    <strong>Pais </strong>
                  </p>
                  {paisDeOrigen}
                </Tag>
                <Box mt={1}></Box>

                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>
                    <strong>Varietal</strong>
                  </p>
                  {varietal}
                </Tag>
                <Box mt={1}></Box>

                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>
                    <strong>Ml</strong>
                  </p>
                  {ml}
                </Tag>
              </Grid>
            </Grid>

            <Box mt={1}></Box>

            <Box mt={1}></Box>

            <Box display="flex">
              <ButtonGroup
                display="flex"
                flex={1}
                variant="outline"
                spacing="6"
                isAttached
                // mx={4}
                // marginX=
                // mx={3}
              >
                <IconButton
                  onClick={minus}
                  flex={1}
                  aria-label="Add to friends"
                  icon={<MinusIcon color="purple" />}
                />

                <BoxCh
                  borderWidth="1px"
                  borderRadius="lg"
                  px={4}
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  flex={1}
                  color="purple"
                >
                  {amount}
                </BoxCh>

                {/* <Button>Cancel</Button> */}
                <IconButton
                  onClick={add}
                  flex={1}
                  aria-label="Add to friends"
                  icon={<AddIcon color="purple" />}
                />
              </ButtonGroup>

              <Button
                mx={4}
                flex={1}
                colorScheme="purple"
                size="md"
                onClick={() => {
                  if (!isAuthenticated) {
                    return history.push("/login");
                  }
                  dispatch(
                    addCartItem({ vinoId: selectedWine.id, cantidad: amount })
                  );
                  history.push("/cart");
                }}
              >
                Comprar
              </Button>
              {userLogged && userLogged === "admin" ? (
                <div>
                  <Button
                    onClick={() => {
                      handleClickDelete();
                    }}
                  >
                    Delete product
                  </Button>
                  <Link to="/editProduct">
                    <Button>Edit product</Button>
                  </Link>
                </div>
              ) : null}
            </Box>

            {/* <Button variant="contained" size="large" color="secondary">
            COMPRAR
          </Button> */}
          </Box>
        </Grid>
      </Grid>

      {/* REVIEWS */}

      <ReviewSection vinoId={selectedWine.id} />
    </div>
  );
}
