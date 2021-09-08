import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { flexbox } from "@material-ui/system";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import axios from "axios";
function Grids() {
  //por aca debemos traer la data del state con useSelector cuando este hecho

  //mientras creo un local state
  const [fakeProducts, setFakeProducts] = useState([]);

  useEffect(() => {
    setFakeProducts([
      {
        id: 1,
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        id: 2,
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        id: 3,
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        id: 4,
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        id: 5,
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        id: 6,
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        id: 7,
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
    ]);
  }, []);

  return (
    <Box>
      <Box
        pb={10}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        bgcolor="text.primary"
      >
        {fakeProducts.map((wine, i) => {
          return <Cards key={i} products={wine} />;
        })}
      </Box>
    </Box>
  );
}

export default Grids;
