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



function App() {
  let usernameRegister;
  let passwordRegister;
  let emailRegister;
  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(sendValidation());
  }, []);


  const handleClick = (input) => {
    console.log(input);
    return dispatch(setCarrito(input));
  };



  const protector = (user) => {
    if (!user.isAuthenticated) return "/login";
  };

  const noLogin = (user) => {
    if (user.isAuthenticated) return "/search";
  };

  const handleChangeUsernameRegister = (e) => {
    usernameRegister = e.target.value
    console.log('se cambio username')
  }
  const handleChangePasswordRegister = (e) => {
    passwordRegister = e.target.value
    console.log('se cambio pass')
  }
  const handleChangeEmailRegister = (e) => {
    emailRegister = e.target.value
    console.log('se cambio mail')
  }

  const handleSubmitRegisterForm = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/auth/register', {
      email: emailRegister,
      username: usernameRegister,
      password: passwordRegister
    })
      .then((data) => {
        dispatch(setUsers(data.data))
      })
      .catch(e => console.log(e))
  }


  return (
    <div>
      <NavBar handleClick={handleClick} />
      <Switch>
        {/* 
        <Route
          exact
          path="/products"
          render={() => {
            return <Grids />;
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            //Aca iria el LogIn de Bruno.
            return <Login />;
          }}
        />
        <Route
          exact
          path="/Register"
          render={() => {
            return <Register />
          }}
        />
        <Route
          exact
          path="/carrito"
          render={() => {
            return <Cart />;
          }}
        /> */}


        <Route exact path="/login">
          <Protector evaluate={noLogin}>
            <Login />
          </Protector>
        </Route>

        <Route exact path="/Register">
          <Protector evaluate={noLogin}>
            <Register handleChangeEmailRegister={handleChangeEmailRegister} handleChangePasswordRegister={handleChangePasswordRegister} handleChangeUsernameRegister={handleChangeUsernameRegister} handleSubmitRegisterForm={handleSubmitRegisterForm} />
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


        <Route
          exact
          path="/singleProduct"
          render={() => {
            return <Wine />;
          }}
        />
      </Switch>
      <Footer />
    </div>
  );
}
// "start": "react-scripts start",
export default App;
