import React from "react";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import ProductData from "./Components/ProductData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductData />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
