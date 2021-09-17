import React, { useContext, useEffect, useState } from "react";
import { AllVinos } from "./AllVinos";
import { Box, Typography, Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { setProducts } from "../store/ProductsReducer";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button as CkButton,
} from "@chakra-ui/react";
import AddProduct from "../components/AddProducts";
import { ModalContext } from "../contexts/modalContext";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalContext = useContext(ModalContext);

  console.log("MODAL CONTEXT EN LIST", modalContext);

  useEffect(() => {
    axios.get("http://localhost:3001/api/vinos").then(({ data }) => {
      setProducts(data);
      // modalContext.setData({ body: <h1>HIIIIIIIIIII</h1> });
      // modalContext.onOpen()
    });
  }, []);

  const openModal = () => {
    modalContext.setData({
      body: <AddProduct />,
      title: "ADD A WINE",
    });
  };

  return (
    <div>
      <Box mb={2} display="flex" justifyContent="space-between">
        <Typography variant="h5">Productos</Typography>

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

      {/* <Box mb={2} textAlign="center" padding="0 20%"> */}
      <Box mb={2} width="30%">
        <TextField
          inputProps={{ type: "search" }}
          // fullWidth
          id="standard-basic"
          label="Search a product"
          fullWidth
        />
      </Box>
      <AllVinos products={products} />
    </div>
  );
};
