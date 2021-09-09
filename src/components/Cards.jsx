import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { IconButton, Icon } from "@material-ui/core";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import { useHistory } from "react-router-dom";
import { setCarrito } from "../store/addToCarrito";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../store/selectedProductReducer";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 200,
    minHeight: 360,
    margin: "15px 10px",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

export const Cards = React.memo(function GalaxyCard({ products }) {
  const { Bodega, Precio, Color, Img } = products;

  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const history = useHistory();
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: "Spartan", weights: [300] },
            { font: "Montserrat", weights: [200, 400, 700] },
          ]}
        />
      </NoSsr>
      <Card className={styles.card}>
        <CardMedia classes={mediaStyles} image={Img} />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle>{Color}</InfoSubtitle>
            <InfoTitle>{Bodega}</InfoTitle>
            <InfoCaption>{`$ ${Precio}`}</InfoCaption>
          </Info>

          <IconButton
            onClick={() => {
              dispatch(setSelectedProduct(products));
              history.push(`/singleproduct`);
            }}
          >
            <Icon color="secondary">add_circle</Icon>
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(setCarrito(products));
              history.push("/carrito");
            }}
          >
            <AddShoppingCartSharpIcon color="secondary" />
          </IconButton>
        </Box>
      </Card>
    </>
  );
});

export default Cards;
