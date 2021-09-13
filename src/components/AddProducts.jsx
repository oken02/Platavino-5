import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as routerLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import {
    sendLogin,
    sendValidation,
    setIsLogged,
} from "../store/isLoggedReducer";
import { Link } from "@material-ui/core";

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

function Login() {
    let requiredInfo = ['Pais de origen', 'Bodega', 'Precio', 'Varietal', 'Color', 'ml', 'Descripcion', 'img', 'Stock']
    const [email, setEmail] = useState("");
    const history = useHistory();
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(sendLogin({ email, password })).then((action) => {
            if (action.error) {
                setPassword("");
            } else {
                history.push("/products");
            }
        });
    };

    const handelPassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
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
                        ¿Want to add a wine?
                    </Typography>
                    <form onSubmit={handleSubmit} className={`${classes.form} reqInfoContainer`} noValidate>
                        {requiredInfo.map((info) => {
                            return (
                                <TextField
                                    onChange={handleEmail}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label={`${info}`}
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    className='input'
                                />
                            )
                        })}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add a wine!
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

export default Login;
