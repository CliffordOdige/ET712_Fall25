// src/App.js
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  // cart state at top level
  const [cart, setCart] = useState([]);

  // add item, or if exists increase qty
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      // first time we add this product, start qty at 1
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // remove by id
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // subtotal, tax, total
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const taxRate = 0.0816; // 8.16%
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.length} />

        <h1 className="apptitle">Welcome to Clifford Odige supermarket</h1>

        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                subtotal={subtotal}
                tax={tax}
                total={total}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

