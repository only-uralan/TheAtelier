import React from "react";
import { useState } from "react";
import "./Order.css";
import { dataBase } from "../ProductDB/ProductDB";
import { Product } from "../shop/Shop";

const Order = () => {

  const [total, setTotal] = useState([]);
  console.log(total);

  function addToTotal(item) {
    const temp = [...total, item];
    setTotal(temp)
  }

  return (
    <div className = "order-container">
      <div>
        <p>asdfasdfa</p>
        {
          dataBase.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={addToTotal}>ДОБАВИТЬ В КОРЗИНУ</button>
              </div>
            )
          })
        }
     
        
      </div>
      <div>
        КОрзина
        {
          total.map((item) => {
            return (
              <p>{item.name}</p>
            )
          })
        }
      </div>
    </div>
  )   
}

export default Order;
