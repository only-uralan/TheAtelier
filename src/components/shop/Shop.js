import React from "react";
import { useHistory } from "react-router-dom";

import "./Shop.css";

const dataBase = [
  {
    id: 1,
    name: "Платье",
    color: "Красное",
    price: 222222,
  },
  {
    id: 2,
    name: "Носки",
    color: "Красное",
    price: 222222,
  },
  {
    id: 3,
    name: "Шорты",
    color: "Красное",
    price: 222222,
  },
  {
    id: 4,
    name: "Рубашка",
    color: "Красное",
    price: 222222,
  },
];

const Product = ({ name, color, price }) => {
  const history = useHistory()
  return (
    <div onClick={() => history.push(`shop/${name}`)}>
      <img src="asdfasdf" alt={name}></img>
      <p>{name}</p>
      <p>{color}</p>
      <p>{price} рублей</p>
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <h1>Catalog</h1>
      {
        dataBase.map(({id, name, color, price }) => {
          return <Product key={id} name={name} color={color} price={price} />
        })
      }
    </div>
  );
};

export default Shop;
