import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <nav>
      <img
        src="Images/lemonadeLogo.png"
        className="nav__icon"
        alt="Lemonade Logo"
        onClick={() => navigate("/")}
      />
      <h3 className="nav__logo_text">Lemonade Webshop</h3>
      <div className="shopping__cart" onClick={() => navigate("/cart")}>
        <img
          src="Images/Cart.png"
          className="shopping__cart"
          alt="Lemonade Logo"
          onClick={() => navigate("/")}
        />
        <p>{getTotalQuantity() || 0}</p>
      </div>
    </nav>
  );
}
