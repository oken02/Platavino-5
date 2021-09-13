import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Icon } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../store/isLoggedReducer";

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

export function SimpleNavBar() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
            {/* <div style={{margin:"0 10px"}}> */}
            {/* <Avatar src="/broken-image.jpg" /> */}
            {/* </div> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            PLATAVINO 5
          </Typography>
          {/* <Button  color="inherit">Login</Button>
          <Button color="inherit">Register</Button> */}
          {/* <Button
            color="inherit"
            endIcon={<Icon></Icon>}
            onClick={() => dispatch(logout)}
          >
            Logout
          </Button> */}

          {/* <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          > */}
          {/* <MenuIcon /> */}
          {/* <div style={{margin:"0 10px"}}> */}

          {/* <Button color="inherit" onClick={() => dispatch(logout)}>
            <ExitToAppIcon /> logout
          </Button> */}

          {/* </div> */}
          {/* </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
