import Footer from "./components/Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import Wine from "./components/Wine";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Grids from "./components/Grids";
import { useDispatch } from "react-redux";
import carritoReducer from "./store/carritoReducer";
import { setCarrito } from "./store/addToCarrito";

import Register from "./components/Register";
import Login from "./components/Login";
import Protector from "./components/Protector";
import { sendValidation } from "./store/isLoggedReducer";
import { useEffect } from "react";

function App() {
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

  return (
    <div>
      <NavBar handleClick={handleClick} />
      <Switch>
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
            //Aca iria el Register de Bruno.
          }}
        />
        <Route
          exact
          path="/carrito"
          render={() => {
            return <Cart />;
          }}
        />

        <Route exact path="/login">
          <Protector evaluate={noLogin}>
            <Login />
          </Protector>
        </Route>

        <Route exact path="/Register">
          <Protector evaluate={noLogin}>
            <Register />
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
