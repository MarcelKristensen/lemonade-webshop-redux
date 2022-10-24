import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/counterSlice";
import "./Product.css";

const Product = ({ id, img, name, description, quantity, price }) => {
  const dispatch = useDispatch();

  var badgeText;
  if (quantity === 0) {
    badgeText = "SOLD OUT";
  } else {
    badgeText = null;
  }

  var showButton;
  if (quantity === 0) {
    showButton = <p className="product__name">Sold Out</p>;
  } else {
    showButton = (
      <button
        className="product__button"
        onClick={() =>
          dispatch(
            addToCart({
              id,
              name,
              img,
              price,
            })
          )
        }
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className="product">
      {badgeText !== null && <div className="product__badge">{badgeText}</div>}
      <img
        src={process.env.PUBLIC_URL + `/Images/${img}`}
        className="product__image"
        alt="Lemonade img"
      />
      <p className="product__name">{name}</p>
      <p className="product__price">
        <span className="product__price">{price}</span> DKK
      </p>
      <p className="product__description">{description}</p>
      {showButton}
    </div>
  );
};

export default Product;
