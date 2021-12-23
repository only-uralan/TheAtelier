import React, {useContext} from "react";
import { Context } from "../../App";

import "./OrderCounter.css"

const OrderCounter = () => {

    const data = useContext(Context);

    function orderIncrement() {
        data.setData(Number(data.data) + 1)
    }

    return (
        <div>
            <button onClick={orderIncrement} className="order-increment">в корзину</button>
        </div>
    )
}

export default OrderCounter;
