import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Контакты</h3>
        <ul>
          <li>Email</li>
          <li>Телефон</li>
          <li>Адрес</li>
          <li>Личный кабинет</li>
        </ul>
      </div>
      <div>
        <a href="instagram">Instagram</a>
        <a href="whatsApp">WhatsApp</a>
        <a href="facebook">facebook</a>
      </div>
      <span>(c) 2021 The Atelier. All rights reserved</span>
    </footer>
  );
};

export default Footer;
