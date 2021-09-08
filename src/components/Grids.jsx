import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { flexbox } from "@material-ui/system";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
function Grids() {
  //por aca debemos traer la data del state con useSelector cuando este hecho

  //mientras creo un local state
  const [fakeProducts, setFakeProducts] = useState([]);

  useEffect(() => {
    setFakeProducts([
      {
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
      {
        description: "lorem ipsum",
        title: "malbec",
        year: 1931,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp",
      },
    ]);
  }, []);

  return (
    <Box
      pb={10}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      // alignItems="center"
      bgcolor="text.primary"
    >
      {fakeProducts.map((wine, i) => {
        return <Cards key={i} products={wine} />;
      })}
    </Box>
  );
}

export default Grids;
