import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Atelier from "./components/atelier/Atelier";
import Shop from "./components/shop/Shop";
import Order from "./components/order/Order";
import CardProduct from "./components/CardProduct/CardProduct";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/atelier" component={Atelier} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/shop/:name" component={CardProduct} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
