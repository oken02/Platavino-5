import Footer from "./components/Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import Wine from "./components/Wine";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Grids from "./components/Grids";
import { useDispatch } from "react-redux";
import carritoReducer from "./store/carritoReducer";
import { setCarrito } from "./store/addToCarrito";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = (input) => {
    console.log(input);
    return dispatch(setCarrito(input));
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
            return <Login />;
          }}
        />
        <Route
          exact
          path="/Register"
          render={() => {
            return <Register />;
          }}
        />
        <Route
          exact
          path="/carrito"
          render={() => {
            return <Cart />;
          }}
        />

        <Route
          exact
          path="/singleproduct"
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
