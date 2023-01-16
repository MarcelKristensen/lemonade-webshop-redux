import React from "react";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import ProductData from "./Components/ProductData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Checkout from "./Pages/Checkout";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductData />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  );
}
