import React from "react";
import { useSelector } from "react-redux";
import CheckoutTotal from "../Components/CheckoutTotal";
import "./Checkout.css";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalPrice = 0;

    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice };
  };

  return (
    <div className="checkout">
      <div className="checkout__background">
        <div>
          <h3>
            Total:
            <strong>{getTotal().totalPrice} DKK</strong>
          </h3>
          {cart?.map((item) => (
            <CheckoutTotal
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
