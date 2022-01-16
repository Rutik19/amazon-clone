//Payment.js
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment--container">
        {/*Delivery Address*/}
        <div className="payment--section">
          <h3>Delivery Address:</h3>
          <div className="payment--address">
            <p>{user?.email}</p>
            <p>Falt No.301, Hiranandani</p>
            <p>Andheri, India</p>
          </div>
        </div>
        {/*Cart Review*/}
        <div className="payment--section">
          <h3>Review your Item in Cart:</h3>
            <div className="payment--items">
                    {cart.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                    />
                    ))}
            </div>
        </div>
        {/*Payment Gateway*/}
        <div className="payment--section">
            <h3>Payment Method:</h3>  
                <div className="payment--details">
                        {/*Stripe Secret Code*/}
                </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;