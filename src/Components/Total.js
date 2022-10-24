import "./Total.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Total() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  var showButton;
  if (getTotal().totalQuantity === 0) {
    <button className="total__button">Empty basket</button>;
  } else {
    showButton = (
      <button onClick={() => navigate("/checkout")} className="total__button">
        Proceed to Checkout
      </button>
    );
    console.log(getTotal().totalQuantity);
  }

  return (
    <div className="total">
      <div>
        <p className="total__p">
          Subtotal ({getTotal().totalQuantity} items):{" "}
          <strong>{getTotal().totalPrice} DKK</strong>
          {showButton}
        </p>
      </div>
    </div>
  );
}
