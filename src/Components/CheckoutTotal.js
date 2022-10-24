import React from "react";
import "./CheckoutTotal.css";

export default function CheckoutTotal({ img, name, price, quantity }) {
  let totalQtyPrice = price * quantity;
  return (
    <div className="checkout">
      <img
        className="checkout__image"
        src={process.env.PUBLIC_URL + `/Images/${img}`}
        alt="item"
      />
      <div className="checkout__info">
        <p className="checkout__title">{name}</p>
        <p>Qty: {quantity}</p>
        <p className="checkout__price">
          <strong>{totalQtyPrice}</strong>
          <small> DKK</small>
        </p>
      </div>
    </div>
  );
}
