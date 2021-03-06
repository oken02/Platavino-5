import React, { useEffect } from "react";
import { AllVinos } from "./AllVinos";
import FilterSidebar from "./FilterSidebar";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/ProductsReducer";
import { getBodega, setCategories } from "../store/CategoriesReducer";
const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
  },
  space: {
    maxWidth: "45%",
    marginRight: "15px",
  },
  paper: {
    minHeight: "100vh",
  },
}));

export default function Results() {
  //aca abajo debe ir en realidad como estado el resultado de la busqueda de la barra de navegacion

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    //este useEffect en realidad tiene que dispatchear la action para traer los vinos que se buscaron o por los filtros aplicados
    // dispatch(setProducts());
  }, [categories]);
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Grid item className={classes.space}>
        <Paper elevation={3} className={classes.paper}>
          <FilterSidebar />
        </Paper>
      </Grid>

      <AllVinos products={categories} />
    </div>
  );
}
