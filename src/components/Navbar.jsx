import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = ({ logoText, links = [] }) => {
  return (
    <nav className="main-nav">
      <Link
        className="invisible-button"
        to="/"
      >
        <span className="nav-logo">{logoText}</span>
      </Link>
      <div className="nav-links">
        {links.map((link) => (
          <Link smooth key={link.href} to={link.href} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
