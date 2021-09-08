import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import styles from "./Wine.module.css";
import { IconButton } from "@material-ui/core";

function Wine() {
  const [wine, setwine] = useState(null);
  // const selectedvino = useSelector((state) => state.selectedvino)

  //   useEffect(() => {
  //     get("/movie/" + wineid).then((data) => {
  //       setMovie(data);
  //     });
  //   }, []);

  const defaultProps = {
    bgcolor: "background.paper",
    border: 1,
    m: 1,
    borderColor: "text.primary",
    style: { width: "5rem", height: "5rem" },
  };

  return (
    <>
      <div className={styles.detailsContainer}>
        <img
          className={`${styles.col} ${styles.movieImage}`}
          src="https://cepadevinos.com/wp-content/uploads/2017/07/Luigi_Bosca_Malbec_vludvq.jpg"
          alt="foto vino"
        ></img>

        <div className={`${styles.col} ${styles.movieDetails}`}>
          <h1 className={styles.firstItem}> Nombre vino</h1>
          <p>
            <strong>Bodega:</strong>
          </p>
          <p>
            <strong>Color:</strong>
          </p>
          <p>
            <strong>Description:</strong>
          </p>

          <p>
            <strong>Variedad:</strong>
          </p>

          <p>
            <strong>Año:</strong>
          </p>
          <p>
            <strong>Pais:</strong>
          </p>
          <p>
            <strong>Ml: </strong>
          </p>

          <p> Precio: </p>
          <IconButton color="primary" aria-label="add to shopping cart">
            {/* <AddShoppingCartIcon /> */}
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Wine;
