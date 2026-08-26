const Navbar = ({ logoText, links = [] }) => {
  const handleHashClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav className="main-nav">
      <a className="invisible-button" href="/">
        <span className="nav-logo">{logoText}</span>
      </a>
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
