import { Flex, Heading, Box } from "@chakra-ui/layout";
// import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { AllVinos } from "./AllVinos";
import { MyCarousel } from "./MyCarousel";
import { Sidebar2 } from "./Sidebar2";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/ProductsReducer";
import axios from "axios";
import { Input } from "@chakra-ui/input";
import Results from "./Results";

export const MyHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Box mb={3}>
        <MyCarousel products={products} />
      </Box>

      {/* <Box display="flex" my="7">
        <Heading flex="1" as="h3" size="lg">
          Todos los vinos
        </Heading>
        <Input
          // borderColor="black"
          variant="filled"
          flex="1"
          placeholder="Busca un vino"
        />
      </Box> */}
      {/* <AllVinos products={products} /> */}
      <Results/>
    </div>
  );
};
