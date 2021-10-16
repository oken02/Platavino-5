import React, { useEffect, useState } from "react";
import { AllVinos } from "./AllVinos";
import FilterSidebar from "./FilterSidebar";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/ProductsReducer";
import { getBodega, setCategories } from "../store/CategoriesReducer";
import { Filtrador } from "./Filtrador";
import { Box } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import axios from "axios";
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

  const [vinostemp, setVinostemp] = useState([]);
  const classes = useStyles();
  const [filters, setFilters] = useState({
    precio: "0-6000",
  });

  const setFilter = (menu, subMenu) => () => {
    if (subMenu) filters[menu] = subMenu;
    else delete filters[menu];
    console.log("FILTERS STATE", { ...filters });
    setFilters({ ...filters });
  };

  useEffect(() => {
    //este useEffect en realidad tiene que dispatchear la action para traer los vinos que se buscaron o por los filtros aplicados
    // dispatch(setProducts());
  }, [categories]);

  useEffect(() => {
    // filters.precio = "-" + filters.precio;

    let filtersStr = "";
    for (const key in filters) {
      filtersStr += `${key}=${filters[key]}&`;
    }
    console.log("FILTERSStr QUERY", filtersStr);
    axios
      .get("http://localhost:3001/api/categorias?" + filtersStr)
      .then((res) => {
        setVinostemp(res.data);
        console.log("RESSS", res.data);
      });
  }, [filters]);

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item md={4}>
          <Paper elevation={3}>
            <Filtrador setFilter={setFilter} filters={filters} />
            <hr />
            <hr />
            <hr />

            {/* <FilterSidebar /> */}
          </Paper>
        </Grid>

        <Grid item md={8}>
          <Box>
            <Input
              value={filters.bodega || ""}
              onChange={(e) => setFilter("bodega", e.target.value)()}
              variant="filled"
              placeholder="Find your wine"
              mb={4}
            />
            {/* <p>{JSON.stringify(filters)}</p> */}

            <AllVinos products={vinostemp} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
