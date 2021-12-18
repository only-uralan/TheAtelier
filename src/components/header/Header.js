import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>THE ATELIER</h1>
      </Link>
      <div className="header__nav-menu">
          <ul className="header__information">
            <li>Доставка</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
          <ul className="header__order-lc">
            <Link to={"/order"}>
              <li>Корз 0</li>
            </Link>
            {/* <Link to={"/lc"}>
              <li>ЛК</li>
            </Link> */}
          </ul>
      </div>
    </header>
  );
};

export default Header;
