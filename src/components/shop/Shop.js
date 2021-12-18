import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import cloak from "./1.jpg"

const dataBase = [
  {
    id: 1,
    name: "Пальто",
    price: 14990,
  },
  {
    id: 2,
    name: "Пальто",
    price: 14990,
  },
  {
    id: 3,
    name: "Костюм",
    price: 10990,
  },
  {
    id: 4,
    name: "Костю",
    price: 10990,
  },
];

const Product = ({ name, color, price }) => {
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
        dataBase.map(({ id, name, color, price }) => {
          return <Product key={id} name={name} color={color} price={price} />
        })
      }
    </div>
  );
};

export default Shop;
