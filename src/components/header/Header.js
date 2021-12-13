import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <h1>THE ATELIER</h1>
      </NavLink>
      <div>
        <ul>
          <li>Каталог</li>
          <li>О нас</li>
        </ul>
      </div>
      <div>
        <ul>
          <NavLink to="/order">
            <li>Корзина</li>
          </NavLink>
          <li>Личный кабинет</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
