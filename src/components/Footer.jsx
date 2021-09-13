import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Restore";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 500,
  },
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

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="">
      {/* <div className={classes.offset} />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="toolbarFooter"> */}
      <Paper>
        <Box display="flex" justifyContent="space-between" p={1}>
          <Typography variant="h6">Platavino 5</Typography>

          <Typography>Argentina / Venezuela / Uruguay / Peru</Typography>
        </Box>
      </Paper>

      {/* </Toolbar>
      </AppBar> */}
    </div>
  );
};

export default Footer;
