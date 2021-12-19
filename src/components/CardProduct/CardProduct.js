import React from "react";
import { useParams } from 'react-router-dom';
import "./CardProduct.css";
import OrderCounter from "./OrderCounter";



const CardProduct = () => {
 
  const {name} = useParams();
  
  return (
    <div className="card-container">
      <img src="https://firebasestorage.googleapis.com/v0/b/innopolis-project-a1999.appspot.com/o/1.jpg?alt=media&token=dc925f94-9b2b-415d-89bf-9c41dd3fc0a9" alt="asaf"/>
      <div className="card-description">
        <h2>{name}</h2>
        <p>14990</p>
        <p>Цена</p>
        <p>Описание</p>
        <OrderCounter/>
      </div>
    </div>
  );
};


  



export default CardProduct;