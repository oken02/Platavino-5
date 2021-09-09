import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { flexbox } from "@material-ui/system";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/ProductsReducer";

function Grids() {

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/vinos")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((e) => console.log(e));
  }, []);

  console.log(products);
  return (
    <Box>
      <Box
        pb={10}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        bgcolor="text.primary"
      >
        {products.map((wine, i) => {
          return <Cards key={i} products={wine} />;
        })}
      </Box>
    </Box>
  );
}

export default Grids;
