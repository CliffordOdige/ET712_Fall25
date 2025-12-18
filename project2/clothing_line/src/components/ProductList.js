import React from "react";
import Card from "./Card";

function ProductList({ title, products, onAddToCart, onOpenModal }) {
  return (
    <div className="page">
      <h2 className="producttitle">{title}</h2>

      <section className="cardcontainer">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onOpenModal={onOpenModal}
          />
        ))}
      </section>
    </div>
  );
}

export default ProductList;
