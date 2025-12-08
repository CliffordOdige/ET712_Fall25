import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          React Cart
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
