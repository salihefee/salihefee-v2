import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ logoText, links = [] }) => {
  const handleHashClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav className="main-nav">
      <Link className="invisible-button" to="/">
        <span className="nav-logo">{logoText}</span>
      </Link>
      <div className="nav-links">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleHashClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;