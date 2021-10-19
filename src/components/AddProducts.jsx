import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "@material-ui/core";
import { addProduct } from "../store/ProductsReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ModalFooter } from "@chakra-ui/modal";

import { Button as CkButton } from "@chakra-ui/react";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Platavino 5
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

function AddProduct({ onClose }) {
  const lstoken = localStorage.getItem("token");
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState({
    paisDeOrigen: "",
    bodega: "",
    precio: "",
    varietal: "",
    color: "",
    ml: "",
    descripcion: "",
    img: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3001/api/vinos/nuevo`,
        {
          PaisDeOrigen: values.paisDeOrigen,
          Bodega: values.bodega,
          Precio: values.precio,
          Varietal: values.varietal,
          Color: values.color,
          ml: values.ml,
          Descripcion: values.descripcion,
          Img: values.img,
          Stock: values.stock,
        },
        {
          headers: {
            Authorization: "Bearer " + lstoken,
          },
        }
      )
      .then((data) => {
        dispatch(addProduct(data));
        history.push("/home");
        onClose();
      })
      .catch((e) => console.log("ERROR EN POSTEO", e));
  };

  return (
    <div>
      {/* <Typography component="h1" variant="h5">
        ¿Want to add a wine?
      </Typography> */}
      <h1>HIIIIII</h1>
      <form className={`${classes.form} reqInfoContainer`} noValidate>
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Pais de origen"
          name="paisDeOrigen"
          value={values.paisDeOrigen}
          autoComplete="email"
          autoFocus
          className="input"
        />
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Bodega"
          name="bodega"
          value={values.bodega}
          autoComplete="email"
          autoFocus
          className="input"
        />
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Precio"
          name="precio"
          value={values.precio}
          autoComplete="email"
          autoFocus
          className="input"
        />
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Varietal"
          name="varietal"
          value={values.varietal}
          autoComplete="email"
          autoFocus
          className="input"
        />
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Color"
          name="color"
          value={values.color}
          autoComplete="email"
          autoFocus
          className="input"
        />
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="ml"
          name="ml"
          value={values.ml}
          autoComplete="email"
          autoFocus
          className="input"
        />
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Descripcion"
          name="descripcion"
          value={values.descripcion}
          autoComplete="email"
          autoFocus
          className="input"
        />
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Imagen"
          name="img"
          value={values.img}
          autoComplete="email"
          autoFocus
          className="input"
        />
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Stock"
          name="stock"
          value={values.stock}
          autoComplete="email"
          autoFocus
          className="input"
        />
        {/* <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add a wine!
        </Button> */}

        <Grid container>
          <Grid item xs></Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>

      <br />
    </div>
  );
}

export default AddProduct;
