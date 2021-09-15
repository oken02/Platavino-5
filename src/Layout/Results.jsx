import React, { useEffect } from "react";
import { AllVinos } from "./AllVinos";
import FilterSidebar from "./FilterSidebar";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/ProductsReducer";
const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
  },
  space: {
    width: "45%",
    marginRight: "15px",
  },
  paper: {
    height: "100vh",
  },
}));

export default function Results() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Grid item className={classes.space}>
        <Paper elevation={3} className={classes.paper}>
          <FilterSidebar />
        </Paper>
      </Grid>
      <AllVinos products={products} />
    </div>
  );
}
