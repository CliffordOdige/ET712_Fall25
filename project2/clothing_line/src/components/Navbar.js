// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link className="brand" to="/">
          Prototype ENT Clothing
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/hoodies">Hoodies</Link>
        <Link to="/tshirts">T shirts</Link>
        <Link to="/caps">Caps</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
