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
import { Tag } from "@chakra-ui/tag";
import { Code } from "@chakra-ui/layout";

const useStyles = makeStyles((theme) => ({
  tag: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    zIndex: "10",
  },
}));

export const PlatavinoBox = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Code children="console.log(welcome)" /> */}

      <Code
        className={classes.tag}
        colorScheme="purple"
        size="lg" 
        p="2"
        children={
          // <Tag colorScheme="gray" size="lg" bgColor="transparent">
            <b>Argentina / Venezuela / Uruguay / Perú</b>
          // </Tag>
        }
      />

      {/* </Toolbar>
      </AppBar> */}
    </>
  );
};
