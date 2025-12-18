// src/App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

import { products } from "./data/data";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ModalWindow from "./components/ModalWindow";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = product => {
    setCart(currentCart => {
      const exists = currentCart.find(item => item.id === product.id);
      if (exists) {
        return currentCart.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...currentCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = id => {
    setCart(currentCart => currentCart.filter(item => item.id !== id));
  };

  const openModal = product => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const hoodies = products.filter(p => p.category === "hoodie");
  const tshirts = products.filter(p => p.category === "tshirt");
  const caps = products.filter(p => p.category === "cap");

  return (
    <div className="App">
      <Navbar cartCount={cart.length} />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                onAddToCart={addToCart}
                onOpenModal={openModal}
              />
            }
          />

          <Route
            path="/hoodies"
            element={
              <ProductList
                title="Hoodies"
                products={hoodies}
                onAddToCart={addToCart}
                onOpenModal={openModal}
              />
            }
          />

          <Route
            path="/tshirts"
            element={
              <ProductList
                title="T shirts"
                products={tshirts}
                onAddToCart={addToCart}
                onOpenModal={openModal}
              />
            }
          />

          <Route
            path="/caps"
            element={
              <ProductList
                title="Caps"
                products={caps}
                onAddToCart={addToCart}
                onOpenModal={openModal}
              />
            }
          />

          <Route path="/cart" element={<Cart cart={cart} onRemove={removeFromCart} />} />
        </Routes>
      </main>

      <ModalWindow product={selectedProduct} onClose={closeModal} />
    </div>
  );
}

export default App;
