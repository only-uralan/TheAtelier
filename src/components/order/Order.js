import React, {useState} from "react";
import "./Order.css";
import {dataBase} from "../ProductDB/ProductDB";


const Order = () => {

    const [total, setTotal] = useState([]);
    console.log(total);

    function addToTotal(item) {
        const temp = [...total, item];
        setTotal(temp)
    }

    return (
        <div className="order-container">
            <div>
                {
                    dataBase.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <button onClick={addToTotal}>ДОБАВИТЬ В КОРЗИНУ</button>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                Корзина
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
