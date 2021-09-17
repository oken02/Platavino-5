import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import toast, { Toaster } from 'react-hot-toast';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUsers } from "../store/usersReducer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function AdminRegister({
  error,
  leyenda,
}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()
  let usernameRegister
  let passwordRegister
  let emailRegister

  const handleChangeUsernameRegister = (e) => {
    usernameRegister = e.target.value
  }
  console.log(usernameRegister)
  const handleChangePasswordRegister = (e) => {
    passwordRegister = e.target.value
  }
  console.log(passwordRegister)
  const handleChangeEmailRegister = (e) => {
    emailRegister = e.target.value
  }
  console.log(emailRegister)

  const handleSubmitAdminRegisterForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/register", {
        email: emailRegister,
        username: usernameRegister,
        password: passwordRegister,
        role: "admin",
      })
      .then((data) => {
        dispatch(setUsers(data.data));
        toast.success('Administrador registrado exitosamente!')
        history.push('/login')

      })
      .catch((e) => {
        toast.error("Oops, no se pudo registrar el administrador...")
        console.log(e.response)
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Register
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleSubmitAdminRegisterForm(e)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={handleChangeUsernameRegister}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChangeEmailRegister}
                error={error}
                helperText={leyenda}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChangePasswordRegister}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          {/* <Link to="/products"> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Admin Register
          </Button>
          {/* </Link> */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default AdminRegister;
