import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css"; // For additional custom styles

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Using useCallback to memoize the toggleMenu function
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const navLinks = ['Home', 'Products', 'Cart', 'About', 'Contact'];

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>
            Team 7
            <ShoppingCartCheckoutIcon sx={{ verticalAlign: "middle" }} />
          </h1>
        </div>
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((page, index) => (
            <li key={index}>
              <Link to={`/${page.toLowerCase()}`} onClick={toggleMenu}>
                {page}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/signin" onClick={toggleMenu}>
              <AccountCircleIcon sx={{ fontSize: 40 }} />
            </Link>
          </li>
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <CloseIcon sx={{ fontSize: 40 }} /> : <MenuIcon sx={{ fontSize: 40 }} />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
