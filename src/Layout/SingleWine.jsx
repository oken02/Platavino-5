import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GoogleFontLoader from "react-google-font-loader";
import toast, { Toaster } from "react-hot-toast";
import NoSsr from "@material-ui/core/NoSsr";

import StarBorderIcon from "@material-ui/icons/StarBorder";

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
import { setCarrito } from "../store/addToCarrito";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getReview } from "../store/reviewReducer";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../store/selectedProductReducer";
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

export function SingleWine({ match }) {
  const history = useHistory();
  const selected = useSelector((state) => {
    return state.selectedProduct.id;
  });
  const userLogged = useSelector((state) => {
    return state.user.data.role;
  });

  const handleClickDelete = () => {
    axios
      .delete(`http://localhost:3001/api/vinos/borrar/${selected}`, {
        headers: {
          Authorization: "Bearer " + lstoken,
        },
      })
      .then(() => {
        console.log("eliminado");
        toast.success("Vino eliminado correctamente!");
        history.push("/home");
      })
      .catch((e) => {
        toast.error("Oops, no se pudo eliminar el vino...");
        console.log(e);
      });
  };

  const selectedWine = useSelector((state) => state.selectedProduct);
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const {
    Img,
    Bodega,
    Color,
    PaisDeOrigen,
    Varietal,
    Precio,
    Descripcion,
    ml,
    id,
  } = selectedWine;

  const lstoken = localStorage.getItem("token");
  const [comentario, setComentario] = useState("");
  const [puntaje, setPuntaje] = useState("");
  const [reviews, setReviews] = useState([]);
  const isLogged = useSelector((state) => state.user.data);
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
  const handleSubmit = (e) => {
    console.log(id);
    e.preventDefault();
    axios
      .post(
        `http://localhost:3001/api/reviews/${id}`,
        { comentario, puntaje },
        {
          headers: {
            Authorization: "Bearer " + lstoken,
          },
        }
      )
      .then((data) =>
        setReviews(() => {
          console.log("setReview", [...reviews, data.data]);
          setComentario("");
          return [...reviews, data.data];
        })
      )
      .catch((err) => history.push("/login"));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/reviews/${id}`)
      .then((res) => setReviews(res.data));

    axios
      .get(`http://localhost:3001/api/vinos/${match}`)
      .then((res) => dispatch(setSelectedProduct(res.data)));
  }, []);

  console.log(review);

  return (
    //     /*
    <div>
      <Toaster />
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
              src={Img}
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
              {Bodega}
            </Heading>
            <Box mt={1}></Box>
            <Rating name="stars" value={4} readOnly />
            <Box mt={1}></Box>

            <BoxCh fontSize="lg">{`$ ${Precio}`} </BoxCh>

            <Box mt={1}></Box>

            <Text fontSize="md">{Descripcion}</Text>
            <Box mt={1}></Box>

            <Grid container>
              <Grid item md={6} lg={6} className={classes.tags}>
                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>
                    <strong>Color</strong>
                  </p>
                  {Color}
                </Tag>
                <Box mt={1}></Box>

                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>
                    <strong>Pais </strong>
                  </p>
                  {PaisDeOrigen}
                </Tag>
                <Box mt={1}></Box>

                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>
                    <strong>Varietal</strong>
                  </p>
                  {Varietal}
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
                {/* <IconButton
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
                  2
                </BoxCh>

                {/* <Button>Cancel</Button> */}
                {/* <IconButton
                  flex={1}
                  aria-label="Add to friends"
                  icon={<AddIcon color="purple" />}
                />{" "} */}
                {/* */}
              </ButtonGroup>

              <Button
                mx={4}
                flex={1}
                colorScheme="purple"
                size="md"
                onClick={() => {
                  dispatch(setCarrito(selectedWine));
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

      <Heading
        my="10"
        // borderWidth="1px"
        p="3"
        textAlign="center"
        as="h4"
        size="md"
        // borderColor="purple"
        border="1px solid purple"
        borderRadius="lg"
        color="purple.700"
      >
        Reviews
      </Heading>

      <Grid container spacing={3} className={` ${classes.reviews} `}>
        <Grid item lg={6} md={6} className="review-container">
          <>
            <NoSsr>
              <GoogleFontLoader
                fonts={[{ font: "Ubuntu", weights: [400, 700] }]}
              />
            </NoSsr>
            {reviews.map((rev, i) => {
              console.log("rev", rev);
              return (
                <Grid key={i} container className="bruno" spacing={4}>
                  <Grid item xs={12} md={6} lg={4}>
                    <ReviewCard
                      thumbnail={
                        "https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg"
                      }
                      title={rev.user.username}
                      description={
                        <>
                          <b>{rev.comentario}</b>
                        </>
                      }
                      puntaje={rev.puntaje}
                    />
                  </Grid>
                </Grid>
              );
            })}
          </>
        </Grid>

        <Grid item lg={6} md={6}>
          <Heading my="3" as="h5" size="md">
            Write a Review for this wine
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="first-name" isRequired>
              <FormLabel>Your Rating</FormLabel>
              <Rating
                name="customized-empty"
                Required
                defaultValue={3}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                onClick={handleClick}
              />
            </FormControl>

            <FormControl id="first-name">
              <FormLabel>Your Review</FormLabel>
              <Textarea
                // value={"hi"}
                {...comentario}
                onChange={handleInputChange}
                placeholder="Here is a sample placeholder"
                size="sm"
              />
            </FormControl>
            <Button mt={4} colorScheme="purple" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

//       <Grid container className={classes.vinoInfo} spacing={4}>
//         <Grid item sm={6}>
//           <Box>
//             <img
//               style={{
//                 width: "100%",
//                 height: "70vh",
//                 objectFit: "contain",
//                 borderRadius: "16px",
//               }}
//               src="https://wongfood.vteximg.com.br/arquivos/ids/339315-1000-1000/479513002-01-9505.jpg?v=637118676758900000"
//               alt=""
//             />
//           </Box>
//         </Grid>
//         <Grid item sm={6} style={{ height: "100%" }}>
//           <Box
//             height="100%"
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             pr={4}
//           >
//             {/* <Typography variant="h4">Live From Space</Typography> */}
//             <Heading as="h3" size="lg">
//               Live From Space
//             </Heading>
//             <Box mt={1}></Box>
//             <Rating name="stars" value={4} readOnly />
//             <Box mt={1}></Box>

//             <BoxCh fontSize="lg">$ 1135.00 </BoxCh>
//             {/* <Typography variant="subtitle1" color="textSecondary">
//             <Box mt={1}></Box>
//             Balanceado: es el estado ideal de un vino en boca y significa que
//             sus atributos (alcohol, taninos, acidez, fruta y dulzor) están en
//             armonía.
//           </Typography> */}
//             <Box mt={1}></Box>

//             <Text fontSize="md">
//               Balanceado: es el estado ideal de un vino en boca y significa que
//               sus atributos (alcohol, taninos, acidez, fruta y dulzor) están en
//               armonía.
//             </Text>
//             <Box mt={1}></Box>

//             <Grid container>
//               <Grid item md={6} lg={6} className={classes.tags}>
//                 <Tag size="lg">
//                   <p style={{ paddingRight: "4rem" }}>Color</p> Red
//                 </Tag>
//                 <Box mt={1}></Box>

//                 <Tag size="lg">
//                   <p style={{ paddingRight: "4rem" }}>Color</p> Red
//                 </Tag>
//                 <Box mt={1}></Box>

//                 <Tag size="lg">
//                   <p style={{ paddingRight: "4rem" }}>Color</p> Red
//                 </Tag>
//                 <Box mt={1}></Box>

//                 <Tag size="lg">
//                   <p style={{ paddingRight: "4rem" }}>Color</p> Red
//                 </Tag>
//               </Grid>

//               {/* <Grid item md={6}></Grid> */}
//             </Grid>

//             <Box mt={1}></Box>

//             {/* <Typography variant="h5">$ 1135.00</Typography> */}
//             <Box mt={1}></Box>