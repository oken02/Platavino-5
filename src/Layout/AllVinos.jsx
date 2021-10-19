import React, { useContext, useEffect, useState } from "react";

import { Grid } from "@material-ui/core";
import { VinoProduct } from "./VinoProduct";
import { useSelector, useDispatch } from "react-redux";
import { ModalContext } from "../contexts/modalContext";
import { ProductForm } from "./ProductForm";
import axios from "axios";
import { deleteProduct } from "../store/ProductsReducer";

export const AllVinos = ({ products, adminAcions }) => {
  const modalContext = useContext(ModalContext);
  const dispatch = useDispatch();

  const selectedWine = useSelector((state) => {
    return state.selectedProduct;
  });

  console.log("RE RENDER ALL VINOS");

  const onEdit = (id) => () => {
    axios.get("http://localhost:3001/api/vinos/" + id).then((res) => {
      console.log("DATA", res.data);
      modalContext.setData({
        body: <ProductForm data={res.data} editing={true} />,
        title: "Edit a wine",
        onSubmit: () => {
          console.log("SUBMIT EN CREATE PRODUCT");
        },
      });
    });
  };

  const onDelete = (id) => () => {
    // axios.delete("http://localhost:3001/api/vinos/" + id).then((res) => {
    //   console.log("VINO ELIMINADO", id);
    // });
    dispatch(deleteProduct(id));
  };

  return (
    <Grid container spacing={2}>
      {products.map((wine, i) => (
        <Grid key={i} item xs={6} md={3} lg={adminAcions ? 4 : 3}>
          <VinoProduct
            onEdit={onEdit}
            onDelete={onDelete}
            wine={wine}
            adminAcions={adminAcions}
          />
        </Grid>
      ))}
    </Grid>
  );
};
