import Footer from "./components/Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import Wine from "./components/Wine";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Grids from "./components/Grids";
import { useDispatch } from "react-redux";
import { setCarrito } from "./store/addToCarrito";

import Login from "./components/Login";

import Register from "./components/Register";
import Protector from "./components/Protector";
import { sendValidation } from "./store/isLoggedReducer";
import { useEffect } from "react";

import axios from "axios";
import { setUsers } from "./store/usersReducer";
import AdminRegister from "./components/AdminRegister";
import AdminLogin from "./components/AdminLogin";
import Header from "./components/Header";
import { NotFound } from "./components/NotFound";

import { Redirect } from "react-router-dom";
import { SimpleNavBar } from "./components/SimpleNavBar";
import { AdminDrawer } from "./Layout/AdminDrawer";
import { MyContainer } from "./Layout/MyContainer";
import { Mylogin } from "./Layout/MyLogin";
import { MyProfile } from "./Layout/MyProfile";
import { Box, Container } from "@material-ui/core";
import { MyHome } from "./Layout/MyHome";
import { MyAppBar } from "./Layout/MyAppBar";
import { MyMenu } from "./Layout/MyMenu";
import { MyCart } from "./Layout/MyCart";
import { VinoProduct } from "./Layout/VinoProduct";
import { SingleWine } from "./Layout/SingleWine";

function App() {
  let usernameRegister;
  let passwordRegister;
  let emailRegister;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendValidation());
  }, []);

  const handleSubmitAdminRegisterForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/register", {
        email: emailRegister,
        username: usernameRegister,
        password: passwordRegister,
        role: "admin",
      })
      .then((data) => {
        dispatch(setUsers(data.data));
      })
      .catch((e) => console.log(e));
  };

  const handleClick = (input) => {
    console.log(input);
    return dispatch(setCarrito(input));
  };

  const protector = (user) => {
    if (!user.isAuthenticated) return "/login";
  };

  const noLogin = (user) => {
    if (user.isAuthenticated) return "/products";
  };

  const handleChangeUsernameRegister = (e) => {
    usernameRegister = e.target.value;
    console.log("se cambio username");
  };
  const handleChangePasswordRegister = (e) => {
    passwordRegister = e.target.value;
    console.log("se cambio pass");
  };

  const handleChangeEmailRegister = (e) => {
    emailRegister = e.target.value;
    console.log("se cambio mail");
  };

  const handleSubmitRegisterForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/register", {
        email: emailRegister,
        username: usernameRegister,
        password: passwordRegister,
      })
      .then((data) => {
        dispatch(setUsers(data.data));
        history.push("/login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {/* <SimpleNavBar handleClick={handleClick} /> */}
      {/* <Route exact path="/login">
          <Protector evaluate={noLogin}>
            <Login />
          </Protector>
        </Route>
        <Route exact path="/adminLogin">
          <Protector evaluate={noLogin}>
            <AdminLogin />
          </Protector>
        </Route>
        <Route exact path="/home">
          <Header />
        </Route>
        <Route exact path="/register">
          <Protector evaluate={noLogin}>
            <Register
              handleChangeEmailRegister={handleChangeEmailRegister}
              handleChangePasswordRegister={handleChangePasswordRegister}
              handleChangeUsernameRegister={handleChangeUsernameRegister}
              handleSubmitRegisterForm={handleSubmitRegisterForm}
            />
          </Protector>
        </Route>
        <Route exact path="/adminRegister">
          <Protector evaluate={noLogin}>
            <AdminRegister
              handleChangeEmailRegister={handleChangeEmailRegister}
              handleChangePasswordRegister={handleChangePasswordRegister}
              handleChangeUsernameRegister={handleChangeUsernameRegister}
              handleSubmitRegisterForm={handleSubmitAdminRegisterForm}
            />
          </Protector>
        </Route>
        <Route exact path="/products">
          <Protector evaluate={protector}>
            <Grids />
          </Protector>
        </Route>
        <Route exact path="/carrito">
          <Protector evaluate={protector}>
            <Cart />
          </Protector>
        </Route>
        <Route exact path="/singleProduct">
          <Protector evaluate={protector}>
            <Wine />
          </Protector>
        </Route>
        <Route exact path="/notFound">
          <NotFound />
        </Route>
        <Redirect exact from="/" to="/home" /> */}
      {/* mis rutas */}

      <div>
        <MyAppBar />

        <Box mt={4}></Box>
        <Container maxWidth="lg">
          <Switch>
            <Route path="/home" component={MyHome} />
            <Route path="/prueba" component={Mylogin} />
            <Route path="/perfil" component={MyProfile} />
            <Route path="/admin" component={AdminDrawer} />
            <Route path="/cart" component={MyCart} />
            <Route path="/vino/:id" component={SingleWine} />

            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
        <Box mt={4}></Box>
      </div>

      <Footer />
    </div>
  );
}
// "start": "react-scripts start",
export default App;
