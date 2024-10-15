import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Team 7<ShoppingCartCheckoutIcon/></h1>
        </div>
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/contactus">Contact</Link></li>
          <li><Link to="/signin" sx={{fontSize: 60 }}><AccountCircleIcon/></Link></li>
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
