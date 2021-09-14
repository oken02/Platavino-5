import { Flex } from "@chakra-ui/layout";
import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { AllVinos } from "./AllVinos";
import { MyCarousel } from "./MyCarousel";
import { Sidebar2 } from "./Sidebar2";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/ProductsReducer";
import axios from "axios";

export const MyHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  return (
    <div>
      <Box mb={3}>
        <MyCarousel products={products} />
      </Box>
      <AllVinos products={products} />

      <Box mt={4}></Box>
    </div>
  );
};
