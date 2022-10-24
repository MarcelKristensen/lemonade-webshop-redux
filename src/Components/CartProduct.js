import "./CartProduct.css";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../Redux/counterSlice";
import { useDispatch } from "react-redux";

export default function CartProduct({ id, img, name, price, quantity = 0 }) {
  const dispatch = useDispatch();
  return (
    <div className="cartProduct">
      <img
        className="cartProduct__image"
        src={process.env.PUBLIC_URL + `/Images/${img}`}
        alt="product"
      />

      <div className="cartProduct__info">
        <p className="cartProduct__title">{name}</p>
        <p className="cartProduct__price">
          <strong>{price}</strong>
          <small> DKK</small>
        </p>

        <div className="cartProduct__incrDec">
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>

        <button
          className="cartProduct__removeButton"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
