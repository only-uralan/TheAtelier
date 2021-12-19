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

export const Context = React.createContext();


function App() {
  const [data, setData] = React.useState('0');
  const value = {data: data, setData: setData }

  return (
    <div className="App">
      <Context.Provider value={value}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/shop"} element={<Shop />} />
            <Route path={"/atelier"} element={<Atelier />} />
            <Route path={"/order"} element={<Order />} />
            <Route path={"/shop/:name"} element={<CardProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}


export default App;
