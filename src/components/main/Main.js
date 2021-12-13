import React from "react";
import { NavLink } from "react-router-dom";

import "./Main.css";

const Main = () => {
  return (
    <main>
      <div class="mainpage">
        <div class="new-collection">new-collection</div>
        <NavLink to="/shop">
          <div class="shop">Shop</div>
        </NavLink>
        <NavLink to="/atelier">
          <div class="atelier">Atelier</div>
        </NavLink>
        <div class="outerwear">Верхняя одежда</div>
        <div class="dress">Платья</div>
        <div class="accessories">Аксессуары</div>
      </div>
    </main>
  );
};

export default Main;
