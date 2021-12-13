import React from "react";

import "./Atelier.css";

const Atelier = () => {
  return (
    <div>
      <h1>Atelier. Пошив одежды</h1>
      <div>
        <h2>Список предостовляемых услуг</h2>
        <ul>
          <li>Пальто</li>
          <li>Костюмы</li>
          <li>Платья</li>
          <li>Юбки</li>
        </ul>
      </div>
      <button>Заказать</button>
    </div>
  );
};

export default Atelier;
