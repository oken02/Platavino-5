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
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setIsLogged } from "../store/isLoggedReducer";
import img1 from '../utils/Platavino 5.jpg'

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

function Header() {
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("/api/auth/login").then(dispatch(setIsLogged));
    };

    const handelPassword = (e) => { };

    const handleEmail = (e) => {
        const value = e.target.value;
    };

    return (
        <Grid container component="main" className={`${classes.root} hola `}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={`${classes.images} chau `}>{<img alt='logoPhrase' src='https://media-exp3.licdn.com/dms/image/C561BAQGLEisuH9hsxg/company-background_10000/0/1601931979358?e=2159024400&v=beta&t=5zE40Z_UFMapb6ZMB2VJ3YTeAJZm8Mpbm8UJvVOW7SU' className='logoPhrase' />}</Grid>
            <Grid item xs={12} sm={8} md={5} className='logoContainer' component={Paper} elevation={6} square>{<img alt='logoPhrase' src={img1} className='logoPhrase' />}</Grid>
        </Grid >
    );
}

export default Header;
