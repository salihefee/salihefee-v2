import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = ({ logoText = "nulliplex", links = [] }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'blue');

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'pink' ? 'pink' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="main-nav">
      <button className="theme-toggle" onClick={() => setTheme(theme === 'pink' ? 'blue' : 'pink')}>
        <span className="nav-logo">{logoText}</span>
      </button>
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