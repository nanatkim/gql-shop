import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Errors from "./components/Errors";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Order from "./pages/Order";
import "./default.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Errors />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/history" component={Order} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
