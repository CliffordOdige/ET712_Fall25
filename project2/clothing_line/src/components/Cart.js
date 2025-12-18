// src/components/Cart.js

import React from "react";

const TAX_RATE = 0.0816;

function Cart({ cart, onRemove }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="page">
      <h2 className="page-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price each</th>
                <th>Item total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn-remove"
                      onClick={() => onRemove(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>NY sales tax (8.16%): ${tax.toFixed(2)}</p>
            <p className="cart-total">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
