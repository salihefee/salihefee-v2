import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = ({ logoText = "nulliplex", links = [], theme, setTheme }) => {
  return (
    <nav className="main-nav">
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "pink" ? "blue" : "pink")}
      >
        <span className="nav-logo">{logoText}</span>
      </button>
      <div className="nav-links">
        {links.map((link) => (
          <Link smooth key={link.href} to={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
