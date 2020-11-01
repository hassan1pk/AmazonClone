import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue();

    // use {basket.map(item => item.price).reduce(sumItems)}
    const sumItems = (total, item) => {
        return total + item.price;
    }
    const sumItems2 = (total, price) => {
        return total + price;
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                //value={basket?.map((item) => item.price).reduce(((total, item) => item + total), 0)}
                //value={basket?.reduce(((total, item) => item.price + total), 0)}
                //value={basket?.reduce((sumItems), 0)}
                //value={basket?.map((item) => item.price).reduce((sumItems2), 0)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
