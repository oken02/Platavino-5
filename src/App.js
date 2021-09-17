import Footer from "./components/Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import Wine from "./components/Wine";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Grids from "./components/Grids";
import { useDispatch } from "react-redux";
import { setCarrito } from "./store/addToCarrito";

import EditProduct from "./components/EditProduct";
import SingleRowSelectionGrid from "./components/OrdenList";

import toast, { Toaster } from "react-hot-toast";
import Register from "./components/Register";
import Protector from "./components/Protector";
import { sendLogout, sendValidation } from "./store/isLoggedReducer";
import { useEffect } from "react";

import axios from "axios";
import { setUsers } from "./store/usersReducer";
import AdminRegister from "./components/AdminRegister";
import AdminLogin from "./components/AdminLogin";
import Header from "./components/Header";
import { NotFound } from "./components/NotFound";
import { useSelector } from "react-redux";

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
import { PlatavinoBox } from "./Layout/PlatavinoBox";

import { MyCart } from "./Layout/MyCart";
import { VinoProduct } from "./Layout/VinoProduct";
import { SingleWine } from "./Layout/SingleWine";
import AddProducts from "./components/AddProducts";
import Results from "./Layout/Results";

import AddProduct from "./components/AddProducts";
import { SimpleTable } from "./Layout/SimpleTable";
import { ListUsers } from "./Layout/ListUsers";

import Login from "./components/Login";
import { Checkout } from "./components/Checkout";
import Confirmada from "./components/OrdenList";
import OrdenList from "./components/OrdenList";

import { ContactUs } from "./Layout/EmailForm";

import Front from "./components/Front";


function App() {
  let usernameRegister;
  let passwordRegister;
  let emailRegister;
  const history = useHistory();
  const dispatch = useDispatch();
  const userLooged = useSelector((state) => {
    return state.users.isAuthenticated;
  });

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

        toast.success("Usuario registrado!");
        history.push("/login");

        toast.success('Administrador registrado exitosamente!')
        history.push('/login')

      })
      .catch((e) => {
        toast.error("Oops, no se pudo registrar el administrador...")
        console.log(e.response)
      });
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
    console.log(usernameRegister);
  };
  const handleChangePasswordRegister = (e) => {
    passwordRegister = e.target.value;
    console.log(passwordRegister);
  };

  const handleChangeEmailRegister = (e) => {
    emailRegister = e.target.value;
    console.log(emailRegister);
  };

  const handleSubmitRegisterForm = (e) => {
    e.preventDefault();
    console.log(emailRegister, usernameRegister, passwordRegister);
    axios
      .post("http://localhost:3001/api/auth/register", {
        email: emailRegister,
        username: usernameRegister,
        password: passwordRegister,
      })
      .then((data) => {
        dispatch(setUsers(data.data));
        toast.success('Usuario registrado exitosamente!')
        history.push("/login");
      })
      .catch((e) => {
        toast.error("Oops, no se pudo registrar el usuario...")
        console.log('aca en el front', e.response)
      });

  };

  const handleAdminClick = () => {
    history.push("/adminRegister");
  };

  const handleClickLogout = () => {
    toast('Adios!', {
      icon: '👏',
    });
    dispatch(sendLogout());
    history.push('/')
  };

  return (
    <div>
      <Toaster />
      <div>
        <PlatavinoBox />
        <MyAppBar handleClickLogout={handleClickLogout} />

        <Box mt={4}></Box>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path='/' component={Front} />
            <Route path="/home" component={MyHome} />
            <Route path="/perfil" component={MyProfile} />
            <Route path="/admin" component={AdminDrawer} />
            <Route
              path="/perfil/admin/usuarios"
              render={() => {
                <div>
                  <ListUsers
                    handleSubmitRegisterForm={handleSubmitRegisterForm}
                    handleChangePasswordRegister={handleChangePasswordRegister}
                    handleChangeUsernameRegister={handleChangeUsernameRegister}
                    handleChangeEmailRegister={handleChangeEmailRegister}
                  />{" "}
                  <SimpleTable />{" "}
                </div>;
              }}
            />
            <Route path="/cart" component={MyCart} />
            <Route path="/vino/:id" component={SingleWine} />
            <Route path="/results" component={Results} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/ordenHistory" component={SingleRowSelectionGrid} />
            <Route
              path="/adminRegister"
              render={() => {
                return (
                  <AdminRegister
                    handleSubmitAdminRegisterForm={
                      handleSubmitAdminRegisterForm
                    }
                    handleChangePasswordRegister={handleChangePasswordRegister}
                    handleChangeUsernameRegister={handleChangeUsernameRegister}
                    handleChangeEmailRegister={handleChangeEmailRegister}
                  />
                );
              }}
            />
            <Route path="/editProduct" component={EditProduct} />
            <Route path="/addProduct" component={AddProduct} />

            <Route path="/login" component={Login} />
            <Route
              path="/register"
              render={() => (
                <Register
                  handleAdminClick={handleAdminClick}
                  handleChangeEmailRegister={handleChangeEmailRegister}
                  handleChangePasswordRegister={handleChangePasswordRegister}
                  handleChangeUsernameRegister={handleChangeUsernameRegister}
                  handleSubmitRegisterForm={handleSubmitRegisterForm}
                />
              )}
            />
            <Route path="/send" component={ContactUs} />

            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
        <Box mt={4}></Box>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
// "start": "react-scripts start",
export default App;
