import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import cloak from "./1.jpg"
import { dataBase } from "../ProductDB/ProductDB";


export const Product = ({ name, price }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="product-card" onClick={() => navigate(`${name}`)}>
        <img src={cloak} alt={name}></img>
        <p>{name}</p>
        
      </div>
      <p>{price} рублей</p>
    </div>
  );
};

const Shop = () => {
  return (
    <div className="shop-container">
      <h2>Catalog</h2>
      {
        dataBase.map(({ id, name, price }) => {
          return <Product key={id} name={name} price={price} />
        })
      }
    </div>
  );
};

export default Shop;
