import Footer from "./components/Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import Wine from "./components/Wine";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Grids from "./components/Grids";

function App() {
  const history = useHistory();

  return (
    <div>
      <NavBar />
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
        <Route
          exact
          path="/product/:id"
          render={({ match }) => {
            return <Wine wineId={match.params.id} />;
          }}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
