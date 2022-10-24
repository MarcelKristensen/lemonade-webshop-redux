import React from "react";
import CartProduct from "../Components/CartProduct";
import { useSelector } from "react-redux";
import Total from "../Components/Total";
import "./Cart.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div>
        <Total />
      </div>
    </div>
  );
}
