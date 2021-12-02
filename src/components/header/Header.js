import React from 'react';

import './Header.css';


const Header = () => {
    return (
        <header>
            <h1>THE ATELIER</h1>
            <div>
                <ul>
                    <li>Каталог</li>
                    <li>О нас</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Корзина</li>
                    <li>Личный кабинет</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;


