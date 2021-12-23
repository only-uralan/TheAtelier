import React, {createContext, useState} from "react";
import {Route, Routes} from "react-router-dom";

import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";
import Atelier from "./components/atelier/Atelier";
import Shop from "./components/shop/Shop";
import Order from "./components/order/Order";
import CardProduct from "./components/CardProduct/CardProduct";
import "./App.css";

export const Context = createContext(null);

function App() {
    const [data, setData] = useState(0);

    return (
        <Context.Provider value={{data, setData}}>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"/shop"} element={<Shop/>}/>
                    <Route path={"/atelier"} element={<Atelier/>}/>
                    <Route path={"/order"} element={<Order/>}/>
                    <Route path={"/shop/:name"} element={<CardProduct/>}/>
                </Routes>
                <Footer/>
            </div>
        </Context.Provider>
    );
}


export default App;
