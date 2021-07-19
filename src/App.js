import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about";
import Cart from "./components/cart";
import Contact from "./components/contact";
import Admin from "./components/admin";
import GlobalState from "./context/globalState";
import ShoppingList from "./components/shoppingList";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>

          <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/admin" exact component={Admin}></Route>
            <Route path="/shoppingList" exact component={ShoppingList}></Route>
          </Switch>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;

// inv react function components for homework and intro git track on team treehouse
// https://picsum.photos/200/300

// Admin
// /admin route
// attributes:
/**
 * id
 * title
 * price
 * stock
 * image
 * minimum
 */
