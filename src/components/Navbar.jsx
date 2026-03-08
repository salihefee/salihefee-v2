import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = ({ logoText = "nulliplex", links = [] }) => {
  return (
    <nav className="main-nav">
      <span className="nav-logo">{logoText}</span>
      <div className="nav-links">
        {links.map((link, index) => (
          <Link smooth key={index} to={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;