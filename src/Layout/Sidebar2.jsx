import React from "react";
import Box from "@material-ui/core/Box";
import { useGatsbyNestedMenuStyles } from "@mui-treasury/styles/nestedMenu/gatsby";
import NestedMenu from "@mui-treasury/components/menu/nested";
import { Link, NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

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
  },
  box: {
    "& a:hover": {
      color: "black !important",
      //   backgroundColor: "red",
    },
  },
}));

export const Sidebar2 = () => {
  const classes = useStyles();
  const FancyLink = React.forwardRef((props, ref) => (
    <a ref={ref} {...props}>
      Orders
    </a>
  ));
  const getMenus = () => [
    {
      key: "orders",
      label: (
        <Link
          component={FancyLink}
        //   className={classes.link}
          to="/perfil/orders"
        >
          Orders
        </Link>
      ),
    },
    {
      key: "profile",
      label: (
        <NavLink
          component={() => <p>Profile</p>}
          className={classes.link}
          to="/perfil/info"
        >
          Profile Info
        </NavLink>
      ),
    },
    {
      key: "editProfile",
      label: (
        <NavLink
          component={() => <p>Edit Profile</p>}
          className={classes.link}
          to="/perfil/edit"
        >
          Edit profile
        </NavLink>
      ),
    },

    {
      key: "api",
      label: "Gatsby API",
      subMenus: [
        {
          key: "themes",
          label: "Gatsby Themes",
        },
        {
          key: "link",
          label: "Gatsby Link",
        },
        {
          key: "image",
          label: "Gatsby Image",
        },
        {
          key: "config",
          label: "Gatsby Config",
        },
      ],
    },
  ];

  return (
    <Box className={classes.box}>
      <NestedMenu menus={getMenus()} useStyles={useGatsbyNestedMenuStyles} />
    </Box>
  );
};
