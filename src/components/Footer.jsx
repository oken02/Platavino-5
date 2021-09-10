import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  // root: {
  //     flexGrow: 1,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  offset: theme.mixins.toolbar,
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="footer">
      <div className={classes.offset} />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className="toolbarFooter">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Platavino 5
          </Typography>
          Argentina / Venezuela / Uruguay / Peru
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
