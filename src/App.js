
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Footer />
      <Switch>
        <Route exact path='/products' render={() => {
          //Aca iria e Grids de Jose.
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
    </div>
  )
}

export default App;
