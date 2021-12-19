import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./2.jpg";
import shop from "./1.jpg";
import collection from "./3.jpg";


import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="mainpage-container">
        <div className="new-collection">
          <img src={collection} className="new-collection__image" alt="New-collection"/>
        </div>  
          <div className="shop">
            <NavLink to="/shop">
              <img src={shop} className="shop__image" alt="shop"/>
            </NavLink>
          </div>       
          <div className="atelier">
            <NavLink to="/atelier">
              <img src={logo} className="atelier__image" alt="atelier"/>
            </NavLink>
          </div>
      </div>
    </main>
  );
};

export default Main;
