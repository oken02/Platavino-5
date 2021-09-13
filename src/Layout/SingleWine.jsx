import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Box, Grid } from "@material-ui/core";
import { Heading, Text, Box as BoxCh } from "@chakra-ui/layout";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";

import { Tag } from "@chakra-ui/tag";
import { Rating } from "@material-ui/lab";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

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
}));

export function SingleWine() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.vinoInfo} spacing={4}>
      <Grid item sm={6}>
        <Box>
          <img
            style={{ width: "100%", height: "70vh", objectFit: "contain",borderRadius:"16px" }}
            src="https://wongfood.vteximg.com.br/arquivos/ids/339315-1000-1000/479513002-01-9505.jpg?v=637118676758900000"
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
          <Heading as="h3" size="lg" >
            Live From Space
          </Heading>
          <Box mt={1}></Box>
          <Rating name="stars" value={4} readOnly />
          <Box mt={1}></Box>

          <BoxCh fontSize="lg">$ 1135.00 </BoxCh>
          {/* <Typography variant="subtitle1" color="textSecondary">
            <Box mt={1}></Box>
            Balanceado: es el estado ideal de un vino en boca y significa que
            sus atributos (alcohol, taninos, acidez, fruta y dulzor) están en
            armonía.
          </Typography> */}
          <Box mt={1}></Box>

          <Text fontSize="md">
            Balanceado: es el estado ideal de un vino en boca y significa que
            sus atributos (alcohol, taninos, acidez, fruta y dulzor) están en
            armonía.
          </Text>
          <Box mt={1}></Box>

          <Grid container>
            <Grid item md={6} lg={6} className={classes.tags}>
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
              <Box mt={1}></Box>

              <Tag size="lg">
                <p style={{ paddingRight: "4rem" }}>Color</p> Red
              </Tag>
            </Grid>

            {/* <Grid item md={6}></Grid> */}
          </Grid>

          <Box mt={1}></Box>

          {/* <Typography variant="h5">$ 1135.00</Typography> */}
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
                // bg="purple"
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
            <Button mx={4} flex={1} colorScheme="purple" size="md">
              Comprar
            </Button>
          </Box>

          {/* <Button variant="contained" size="large" color="secondary">
            COMPRAR
          </Button> */}
        </Box>
      </Grid>
    </Grid>
  );
}

// <Card className={classes.root} elevation={0}>
//   <Box className={classes.cover}>
//     <img
//       style={{ width: "100%", objectFit: "cover" }}
//       src="https://wongfood.vteximg.com.br/arquivos/ids/339315-1000-1000/479513002-01-9505.jpg?v=637118676758900000"
//       alt=""
//     />
//   </Box>
//   {/* <CardMedia
//     className={classes.cover}
//     image="https://wongfood.vteximg.com.br/arquivos/ids/339315-1000-1000/479513002-01-9505.jpg?v=637118676758900000"
//     title="Live from space album cover"
//   /> */}
//   <div className={classes.details}>
//     <CardContent className={classes.content}>
//       <Typography variant="h4">Live From Space</Typography>
//       <Typography variant="subtitle1" color="textSecondary">
//         Balanceado: es el estado ideal de un vino en boca y significa que
//         sus atributos (alcohol, taninos, acidez, fruta y dulzor) están en
//         armonía.
//       </Typography>
//     </CardContent>
//   </div>
// </Card>
