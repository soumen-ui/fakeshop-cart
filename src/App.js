import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./styles.css";

import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import Details from "./components/Details";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/carts" exact component={Cart} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
