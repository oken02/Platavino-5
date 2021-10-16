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
// import { addProduct, editProduct } from "../store/ProductsReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

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
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function EditProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const lstoken = localStorage.getItem("token");
  const selectedWine = useSelector((state) => {
    return state.selectedProduct;
  });
  const [values, setValues] = useState({
    paisDeOrigen: selectedWine.PaisDeOrigen,
    bodega: selectedWine.Bodega,
    precio: selectedWine.Precio,
    varietal: selectedWine.Varietal,
    color: selectedWine.Color,
    ml: selectedWine.ml,
    descripcion: selectedWine.Descripcion,
    img: selectedWine.Img,
    stock: selectedWine.Stock,
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
      .put(
        `http://localhost:3001/api/vinos/edit/${selectedWine.id}`,
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
        // dispatch(editProduct(data))
        history.push("/home");
      })
      .catch((e) => console.log("ERROR EN POSTEO", e));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ¿Want to edit a wine?
          </Typography>
          <form
            onSubmit={handleSubmit}
            className={`${classes.form} reqInfoContainer`}
            noValidate
          >
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={selectedWine.PaisDeOrigen}
              name="paisDeOrigen"
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
              label={selectedWine.Bodega}
              name="bodega"
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
              label={`$${selectedWine.Precio}`}
              name="precio"
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
              label={selectedWine.Varietal}
              name="varietal"
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
              label={selectedWine.Color}
              name="color"
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
              label={`${selectedWine.ml}ml`}
              name="ml"
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
              label={`${selectedWine.Descripcion.slice(0, 20)}...`}
              name="descripcion"
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
              label={`${selectedWine.Img.slice(0, 20)}...`}
              name="img"
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
              label={`${selectedWine.Stock}`}
              name="stock"
              autoComplete="email"
              autoFocus
              className="input"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Edit a wine!
            </Button>

            <Grid container>
              <Grid item xs></Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default EditProduct;
