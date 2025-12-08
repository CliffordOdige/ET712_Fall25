import React from "react";
import "../App.css";

const Cart = ({ cart, removeFromCart, total }) => {
  return (
    <div>
      <h2 className="carttitle">Your Cart</h2>
      <section className="cartcontainer">
        {cart.length === 0 && (
          <p className="emptymsg">Cart is empty</p>
        )}

        {cart.map((item) => (
          <div key={item.id} className="itemcart">
            <img className="cartitemimg" src={item.image} alt={item.name} />
            <p className="cartitemname">{item.name}</p>
            <p className="cartitemprice">${item.price}/each</p>
            <p className="cartitemquantity">
              Quantity = {item.qty}
            </p>
            <p className="cartitemtotal">
              Total = {item.price * item.qty}
            </p>
            <button
              className="btncartremove"
              onClick={() => removeFromCart(item.id)}
            >
              x Remove
            </button>
          </div>
        ))}

        <p className="totalcart">Total: ${total}</p>
      </section>
    </div>
  );
};

export default Cart;
