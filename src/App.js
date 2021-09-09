import Footer from "./components/Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import Wine from "./components/Wine";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Grids from "./components/Grids";
import { useDispatch } from "react-redux";
import carritoReducer from "./store/carritoReducer";
import { setCarrito } from "./store/addToCarrito";

function App() {

  const history = useHistory();

  const dispatch = useDispatch()

  const handleClick = (input) => {
    console.log(input)
    return dispatch(setCarrito(input))
  }



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
 
        <Route exact path='/singleProduct' render={() => {
          return <Wine />
        }} />
      
   

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
