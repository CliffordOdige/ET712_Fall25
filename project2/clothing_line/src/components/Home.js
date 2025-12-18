// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Home({ products, onAddToCart, onOpenModal }) {
  // Pick 1 hoodie, 1 tshirt, 1 cap for "Featured"
  const featured = [
    products.find(p => p.category === "hoodie"),
    products.find(p => p.category === "tshirt"),
    products.find(p => p.category === "cap"),
  ].filter(Boolean);

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="home-kicker">Prototype ENT</p>
            <h1 className="home-title">
              Built for everyday wear.
              <br />
              Styled for statement nights.
            </h1>
            <p className="home-subtitle">
              Shop hoodies, t shirts and caps. Add items to your cart to see the subtotal,
              New York sales tax, and total price.
            </p>

            <div className="home-cta">
              <Link className="btn btn-primary" to="/hoodies">
                Shop Hoodies
              </Link>
              <Link className="btn btn-ghost" to="/tshirts">
                Shop T shirts
              </Link>
              <Link className="btn btn-ghost" to="/caps">
                Shop Caps
              </Link>
            </div>

            <div className="home-trust">
              <div className="trust-item">
                <span className="trust-dot" />
                Fast checkout
              </div>
              <div className="trust-item">
                <span className="trust-dot" />
                Easy returns
              </div>
              <div className="trust-item">
                <span className="trust-dot" />
                Secure payments
              </div>
            </div>
          </div>

          <div className="home-hero-panel">
            <div className="hero-card">
              <p className="hero-card-label">New Drop</p>
              <p className="hero-card-title">Prototype Essentials</p>
              <p className="hero-card-subtitle">Minimal, clean, and ready to layer.</p>
              <Link className="hero-card-link" to="/hoodies">
                Explore collection →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <h2 className="section-title">Featured</h2>
          <p className="section-subtitle">
            A quick look at what’s hot right now.
          </p>
        </div>

        <div className="card-container">
          {featured.map(product => (
            <Card
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
