import React from "react";

import "./Order.css";

const Order = () => {
  return (
    <div class="order-container">
      <h1>Корзина</h1>
      <div class="product-card">
        <img src="adfas" alt="dress"></img>
        <span>Название товара</span>
        <p>Артикул</p>
      </div>
      <div class="price">
        <span>x 2499 рублей</span>
      </div>
    </div>
  );
};

export default Order;
