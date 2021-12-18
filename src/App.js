import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Routes>
            <Route path={"/"} element={<Main/>} />
            <Route path={"/shop"} element={<Shop/>} />
            <Route path={"/atelier"} element={<Atelier/>} />
            <Route path={"/order"} element={<Order/>} />
            <Route path={"/shop/:name"} element={<CardProduct/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
