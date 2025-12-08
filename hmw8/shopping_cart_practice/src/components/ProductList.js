import React from "react";
import "../App.css";
import apple from "../images/apple.png";
import grapes from "../images/grapes.png";  // or grape.png depending on file
import orange from "../images/orange.png";

const products = [
  { id: 1, name: "Apple", price: 1,   was: 2.5, image: apple },
  { id: 2, name: "Grapes", price: 1.5, was: 2.8, image: grapes },
  { id: 3, name: "Orange", price: 3,   was: 5.0, image: orange },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2 className="producttitle">Products</h2>
      <section className="cardcontainer">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <p className="productname">
              {product.name}
              <s>{product.was}/lb</s>
              <span> ${product.price}</span>/lb
            </p>
            <button
              className="btn_addcart"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;
