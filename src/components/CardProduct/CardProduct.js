import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import "./CardProduct";
// import Shop from "./components/shop/Shop";

const CardProduct = (orders) => {
  
  const {name} = useParams()

  const [orders, setOrders] = useState(0);
  function orderIncrement() {
    setOrders(orders + 1)
  }
  function orderDecrement() {
    setOrders(orders - 1)
  }

  return (
    <div className="card-container">
      <img src="asdfsda" alt="asaf"/>
      <h2>{name}</h2>
      <p>Артикул</p>
      <p>Цена</p>
      <p>Описание</p>

      <p>{orders}</p>
      <button onClick={orderIncrement}>в корзину</button>
      <button onClick={orderDecrement}>из корзины</button>
    </div>
  )
}

  
  



export default CardProduct;