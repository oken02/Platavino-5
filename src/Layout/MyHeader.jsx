import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, ButtonGroup, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MyHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Box></Box>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}

          <Box px={2}>
            <Link color="inherit" href="/" variant="h6">Home</Link>
          </Box>
          <Box px={2}>
            <Link color="inherit" variant="h6">Categories</Link>
          </Box>
          <Box px={2}>
            <img
              style={{ width: "80px" }}
              src="https://en.pimg.jp/062/226/404/1/62226404.jpg"
              alt=""
            />
          </Box>
          <Box px={2}>
            <Link color="inherit" variant="h6">Profile</Link>
          </Box>
          <Box px={2}>
            <Link color="inherit" variant="h6">Carrito</Link>
          </Box>
          {/* <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button>Three</Button>
            <Button>Four</Button>
          </ButtonGroup> */}

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
