import React from "react";

function Card({ product, onAddToCart, onOpenModal }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="card-image"
        onClick={() => onOpenModal(product)}
        style={{ cursor: "pointer" }}
      />

      <p className="productname">{product.name}</p>
      <p>${product.price}</p>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
