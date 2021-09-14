import React from "react";
import { Box, Button, Typography } from "@material-ui/core/";
import { useJupiterNestedMenuStyles } from "@mui-treasury/styles/nestedMenu/jupiter";
import NestedMenu from "@mui-treasury/components/menu/nested";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useFirebaseBtnStyles } from "@mui-treasury/styles/button/firebase";

const useStyles = makeStyles(({ transitions, palette }) => ({
  //   link: {
  //     textDecoration: "none",
  //     color: "inherit",
  //     width: "100%",
  //     position: "absolute",
  //     height: "100%",
  //     left: "0px",
  //     paddingLeft: "16px",
  //     // top: "20px",
  //     display: "flex",
  //     alignItems: "center",
  //     zIndex: 10,
  //   },
  box: {
    "& a:hover": {
      color: "inherit",
      //   backgroundColor: "red",
    },
  },
}));

const com = () => {
  return <p>dee</p>;
};

export const FilterSidebar = () => {
  const classes = useStyles();
  const styles = useFirebaseBtnStyles();

  const getMenus = () => [
    {
      key: "precio",
      label: <h2 className={classes.link}>Precio</h2>,
    },
    {
      key: "color",
      label: <h2 className={classes.link}>Color</h2>,
    },
    {
      key: "bodega",
      label: <h2 className={classes.link}>Bodega</h2>,
    },
    {
      key: "varietal",
      label: <h2 className={classes.link}>Varietal</h2>,
    },
    {
      key: "pais",
      label: <h2 className={classes.link}>Pais de origin</h2>,
    },
  ];

  return (
    <>
      <Box className={classes.box}>
        <NestedMenu menus={getMenus()} useStyles={useJupiterNestedMenuStyles} />
      </Box>
    </>
  );
};
