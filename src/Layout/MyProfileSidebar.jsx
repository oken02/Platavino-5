import React from "react";
import { Box, Button, Typography } from "@material-ui/core/";
import { useJupiterNestedMenuStyles } from "@mui-treasury/styles/nestedMenu/jupiter";
import NestedMenu from "@mui-treasury/components/menu/nested";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useFirebaseBtnStyles } from "@mui-treasury/styles/button/firebase";

const useStyles = makeStyles(({ transitions, palette }) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
    position: "absolute",
    height: "100%",
    left: "0px",
    paddingLeft: "16px",
    // top: "20px",
    display: "flex",
    alignItems: "center",
    zIndex: 10,
    fontSize: ".9rem",
  },
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

export const MyProfileSidebar = () => {
  const classes = useStyles();
  const styles = useFirebaseBtnStyles();
  const history = useHistory();

  const redirect = (path) => () => {
    history.push(path);
  };

  const getMenus = () => [
    {
      key: "orders",
      label: <p onClick={redirect("/perfil/orders")}>Orders</p>,
    },
    {
      key: "profile",
      label: <p onClick={redirect("/perfil/info")}>Profile</p>,
    },
    {
      key: "editProfile",
      label: <p onClick={redirect("/perfil/edit")}>Edit profile</p>,
    },
    {
      key: "admin",
      label: "Admin Section",
      subMenus: [
        {
          key: "users",
          label: <p onClick={redirect("/perfil/admin/users")}>Users</p>,
        },
        {
          key: "products",
          label: <p onClick={redirect("/perfil/admin/products")}>Products</p>,
        },
        {
          key: "categories",
          label: <p onClick={redirect("/perfil/admin/categories")}>Categories</p>,
        },
      ],
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
