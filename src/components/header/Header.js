import React from "react";
import { Link } from "react-router-dom";
import OrderCounter from "../CardProduct/OrderCounter";
import "./Header.css";
import { Context } from "../../App"; 

const Header = () => {
  const {data} = React.useContext(Context)
  

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
          <div className="header__order-lc">
            <Link to={"/order"}>
              <img src="https://assets3.insales.ru/assets/1/3692/1412716/1588927979/basket_k.svg"
                className="order-icon"/>
              <span>{data}</span>
            </Link>
          </div>
      </div>
    </header>
  );
};

export default Header;
