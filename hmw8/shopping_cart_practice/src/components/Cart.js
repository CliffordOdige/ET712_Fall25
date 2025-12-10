// src/components/Cart.js
import React from "react";

const Cart = ({ cart, removeFromCart, subtotal, tax, total }) => {
  return (
    <main className="cart">
      <h2>Your Cart</h2>

      <section className="cartcontainer">
        {cart.map((item) => (
          <div key={item.id} className="cartitem">
            <img
              src={item.image}
              alt={item.name}
              className="cartitemimg"
            />

            <p className="cartitemname">
              {item.name} ${item.price}/each
            </p>

            <p className="cartitemquantity">Quantity = {item.qty}</p>

            <p className="cartitemtotal">
              Total = {(item.price * item.qty).toFixed(2)}
            </p>

            <button
              className="btncartremove"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      <div className="carttotals">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>NY sales tax (8.16%): ${tax.toFixed(2)}</p>
        <p className="cartgrandtotal">Total: ${total.toFixed(2)}</p>
      </div>
    </main>
  );
};

export default Cart;
