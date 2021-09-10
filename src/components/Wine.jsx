import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Wine.module.css";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { setSelectedProduct } from "../store/selectedProductReducer";
import { useDispatch, useSelector } from "react-redux";
import { setCarrito } from "../store/addToCarrito";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Wine() {
  const wine = useSelector((state) => state.selectedProduct);

  const dispatch = useDispatch();

  //dispatch(setSelectedProduct())

  const defaultProps = {
    bgcolor: "background.paper",
    border: 1,
    m: 1,
    borderColor: "text.primary",
    style: { width: "5rem", height: "5rem" },
  };
  const classes = useStyles();

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={wine.Img}
        alt="foto vino"
      ></img>

      <div className={`${styles.col} ${styles.movieDetails}`}>
        <h1 className={styles.firstItem}> </h1>
        <p>
          <strong>Bodega:</strong> {wine.Bodega}
        </p>
        <p>
          <strong>Color:</strong> {wine.Color}
        </p>
        <p>
          <strong>Description:</strong>
          {wine.Descripcion}
        </p>
        <p>
          <strong>Variedad:</strong>
          {wine.Varietal}
        </p>
        <p>
          <strong>Pais:</strong>
          {wine.PaisDeOrigen}
        </p>
        <p>
          <strong>Ml: </strong>
          {wine.ml}
        </p>
        <p>
          {" "}
          <strong>Precio: US$ </strong> {wine.Precio}
        </p>
        <Link to="/carrito">
          <Button
            onClick={() => dispatch(setCarrito(wine))}
            variant="contained"
            color="secondary"
          >
            Comprar
          </Button>
        </Link>
      </div>

  );
}

export default Wine;
