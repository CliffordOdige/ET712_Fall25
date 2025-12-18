// src/components/ModalWindow.js

import React from "react";

function ModalWindow({ product, onClose }) {
  if (!product) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={event => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="modal-image"
        />
        <h2 className="modal-title">{product.name}</h2>
        <p className="modal-description">{product.description}</p>
        <p className="modal-price">Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ModalWindow;
