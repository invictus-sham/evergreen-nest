import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; 

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Nursery Store Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Categories</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
