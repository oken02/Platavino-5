import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GoogleFontLoader from "react-google-font-loader";
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
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

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
  const history = useHistory()
  const selected = useSelector((state) => {
    return state.selectedProduct.id
  })
  const userLogged = useSelector((state) => {
    return state.user.data.role
  })

  const handleClickDelete = () => {
    axios.delete(`http://localhost:3001/api/vinos/borrar/${selected}`)
      .then(() => {
        console.log('eliminado')
        history.push('/home')
      })
      .catch(e => console.log(e))
  }
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
    id,
  } = selectedWine;

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
              {Varietal}
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
                  <p style={{ paddingRight: "4rem" }}>Color</p> {Color}
                </Tag>
                <Box mt={1}></Box>

                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>Color</p> Red
                </Tag>
                <Box mt={1}></Box>

                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>Color</p> Red
                </Tag>
                <Box mt={1}></Box>

                <Tag size="lg">
                  <p style={{ paddingRight: "4rem" }}>Color</p> Red
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
                <IconButton
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
                  dispatch(setCarrito(selectedWine));
                  history.push("/cart");
                }}
              >
                Comprar
              </Button>
              {userLogged && userLogged === 'admin' ? <div>
                <Button onClick={() => {
                  handleClickDelete()
                }}>Delete product</Button>
                <Link to='/editProduct'>
                  <Button>Edit product</Button>
                </Link>
              </div> : null}
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

      <Grid container spacing={3} className={classes.reviews}>
        <Grid item lg={6} md={6}>
          <>
            <NoSsr>
              <GoogleFontLoader
                fonts={[{ font: "Ubuntu", weights: [400, 700] }]}
              />
            </NoSsr>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} lg={4}>
                <ReviewCard
                  thumbnail={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU"
                  }
                  title={"APEX Legends: Assemble!"}
                  description={
                    <>
                      <b>Shining Alpaca</b> and 3 others are already members of
                      this group.
                    </>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ReviewCard
                  thumbnail={
                    "https://cm1.narvii.com/7153/05204b8d8dcbb652dd1a8ceaafde997bc1909468_00.jpg"
                  }
                  title={"League of Legends Official"}
                  description={
                    "You are already a member of this group since April 5th 2019."
                  }
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ReviewCard
                  thumbnail={
                    "https://bazar-react.vercel.app/assets/images/faces/7.png"
                  }
                  title={"Jannie Schumm"}
                  description={
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Varius massa id ut mattis. Facilisis vitae gravida egestas
                      ac account.
                    </>
                  }
                />
              </Grid>
            </Grid>
          </>
        </Grid>

        <Grid item lg={6} md={6}>
          <Heading my="3" as="h5" size="md">
            Write a Review for this wine
          </Heading>
          <form>
            <FormControl id="first-name" isRequired>
              <FormLabel>Your Rating</FormLabel>
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </FormControl>

            <FormControl id="first-name">
              <FormLabel>Your Review</FormLabel>
              <Textarea
                // value={"hi"}
                // onChange={handleInputChange}
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

// */
