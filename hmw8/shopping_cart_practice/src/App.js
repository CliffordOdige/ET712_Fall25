import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";



function App() {
  // cart state at top level
  const [cart, setCart] = useState([]);

  // from the module: add item, or if exists increase qty
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    // If product exists, increase quantity
    if (exist) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        })
      );
    }
    // If product does not exist, add new item
    else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // from the module: remove by id
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // total price of items
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
  <Router>
    <div className="App">

      <Navbar cartCount={cart.length} />

      <h1 className="apptitle">
        Welcome to Clifford Odige supermarket
      </h1>

      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>

    </div>
  </Router>
);

}

export default App;
