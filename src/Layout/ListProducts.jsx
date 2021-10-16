import React, { useContext, useEffect, useState, useRef } from "react";
import { AllVinos } from "./AllVinos";
import { Box, Typography, Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { getProducts, setProducts } from "../store/ProductsReducer";
import { Button as CkButton, Input, Heading } from "@chakra-ui/react";
import AddProduct from "../components/AddProducts";
import { ModalContext } from "../contexts/modalContext";
import { useDispatch, useSelector } from "react-redux";
import { useSearch } from "../hooks/useSearch";

export const ListProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // const [productsTemp, setProductsTemp] = useState(null);
  const modalContext = useContext(ModalContext);

  // console.log("MODAL CONTEXT EN LIST", modalContext);
  const [productsTemp, changeQuery] = useSearch(
    "http://localhost:3001/api/categorias/bodega/"
  );

  console.log("RE RENDER EN LIST PRODUCTS");

  // const getMatches = ({ target: { value } }) => {
  //   queryref.current = value;
  //   if (value.length <= 1) return;
  //   axios
  //     .get(`http://localhost:3001/api/categorias/bodega/${value}`)
  //     .then((res) => {
  //       if (value === queryref.current) {
  //         setProductsTemp(res.data);
  //         console.log("SETTED!!!");
  //       }
  //     });
  // };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const openModal = () => {
    modalContext.setData({
      body: <AddProduct />,
      title: "ADD A WINE",
      onSubmit: () => {
        console.log("SUBMIT EN CREATE PRODUCT");
      },
    });
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <Heading as="h4" size="lg">
          Productos
        </Heading>

        <Button
          variant="contained"
          color="primary"
          // className={classes.button}
          startIcon={<AddIcon />}
          onClick={openModal}
        >
          Añadir Producto
        </Button>
      </Box>

      <Box my={3}>
        <Input
          onChange={changeQuery}
          variant="filled"
          placeholder="Busca un producto"
        />
      </Box>

      <AllVinos products={productsTemp || products} adminAcions={true} />
    </div>
  );
};
