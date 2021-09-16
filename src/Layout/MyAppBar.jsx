import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router";
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
  Heading,
  Input,
  Flex,
  Spacer,
  Tooltip,
  Box,
} from "@chakra-ui/react";


import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useFloatNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/float";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUsers } from "../store/usersReducer";

const useStyles = makeStyles((theme) => ({
  menu: {
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
    // margin: "auto",
  },
}));



export function MyAppBar({ handleClickLogout }) {
  const classes = useStyles();
  const lstoken = localStorage.getItem('token')
  const isLogged = useSelector((state) => {
    return state.user.isAuthenticated
  })
  const dispatch = useDispatch()
  const history = useHistory()
  const username = useSelector((state) => {
    return state.user.data.username
  })
  const userRole = useSelector((state) => {
    return state.user.data.role
  })
  const handleClickUsersPanel = () => {
    axios.get("http://localhost:3001/api/users", {
      headers: {
        Authorization: `Bearer ${lstoken}`
      }
    })
      .then((data) => {
        dispatch(setUsers(data.data))
        history.push('/admin/usuarios')
      })
      .catch(e => console.log(e))
  }

  return (
    <div className={classes.root}>
      <div className={classes.offset} />
      <AppBar position="fixed" color="white">
        <Toolbar>
          <Box display="flex" alignItems="center">
            <Heading mr="2" as="h6" size="xs">
              Platavino 5
            </Heading>

            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            > */}
            <LocalBarIcon className={classes.menuButton} />
            {/* </IconButton> */}
          </Box>

          {/* <Typography variant="h6" className={classes.title}>
            Platavino 5
          </Typography>
          <Button color="inherit">Login</Button>
          <Button component={Link} to="/admin" color="inherit">
            Admin
          </Button> */}

          <NavMenu className={classes.menu} gutter={1} useStyles={useFloatNavigationMenuStyles}>
            <NavItem active as={Link} to="/home">
              Vinos
            </NavItem>
            <NavItem as={Link} to="/home">
              Categorias
            </NavItem>
            <NavItem as={Link} to="/cart">
              Carrito
            </NavItem>
            {userRole === 'admin' ?
              <Button onClick={handleClickUsersPanel}>Panel de usuarios</Button>
              : null}

          </NavMenu>
          <Link to='/addProduct'>
            <Button className={classes.menu} useStyles={useFloatNavigationMenuStyles}>Add wine</Button>
          </Link>
          <Box>
            <Input variant="filled" placeholder="Find your wine" />
          </Box>
          {isLogged ? <div className='userButton'>
            <Link to='/perfil'>
              <Button>{username}</Button>
            </Link>
            <Link to='/perfil'>
              <Button onClick={handleClickLogout}>Log Out</Button>
            </Link>
          </div> : <div className='userButton'>
            <Link to='/login'>
              <Button>Sign In</Button>
            </Link>
            <Link to='/register'>
              <Button>Register</Button>
            </Link>
          </div>}
          {/* </Form> */}
        </Toolbar>

        {/* </Flex> */}
      </AppBar>
    </div>
  );
}
