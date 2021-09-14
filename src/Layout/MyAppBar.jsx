import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { MyMenu } from "./MyMenu";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Input,
  Flex,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";

import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useFloatNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/float";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Form } from "react-bootstrap";

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
  offset: theme.mixins.toolbar,
  input: {
    margin: "auto",
  },
}));

export function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.offset} />
      <AppBar position="fixed" color="white">
        <Flex>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <LocalBarIcon />
            </IconButton>

            <NavMenu gutter={1} useStyles={useFloatNavigationMenuStyles}>
              <NavItem active as={Link} to="/home">
                Vinos
              </NavItem>

              <NavItem as={Link} to="/home">
                Categorias
              </NavItem>
              <NavItem as={Link} to="/cart">
                Carrito
              </NavItem>
              <NavItem as={Link} to="/perfil">
                Perfil
              </NavItem>
            </NavMenu>
          </Toolbar>
          <Spacer />
          <Form className={classes.input}>
            <Input variant="filled" placeholder="Find your wine" />
          </Form>
        </Flex>
      </AppBar>
    </div>
  );
}
