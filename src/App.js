import Footer from "./components/Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import Wine from "./components/Wine";

import NavBar from "./components/NavBar";
import Grids from "./components/Grids";

function App() {
  const history = useHistory()
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/products' render={() => {
          return <Grids />
        }} />
        <Route exact path='/login' render={() => {
          //Aca iria el LogIn de Bruno.
        }} />
        <Route exact path='/Register' render={() => {
          //Aca iria el Register de Bruno.
        }} />
        <Route exact path='/carrito' render={() => {
          //Aca iria el carrito.
        }} />
      </Switch>
      <Footer />
    </div >
  );
}

export default App;
