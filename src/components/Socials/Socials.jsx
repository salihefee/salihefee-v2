import { useState } from "react";

const SocialCard = ({ service, account, url, disabled }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(false);
    requestAnimationFrame(() => setIsAnimating(true));
  };

  const className = `social-card ${disabled ? "disabled-button" : ""} ${isAnimating ? "scale-animation" : ""}`.trim();

  if (disabled) {
    return (
      <button
        type="button"
        className={className}
        onClick={handleClick}
        onAnimationEnd={() => setIsAnimating(false)}
        aria-disabled="true"
      >
        <span className="social-service">{service}</span>
        <span className="social-account">{account}</span>
      </button>
    );
  }

  return (
    <a href={url} className={className} target="_blank" rel="noreferrer">
      <span className="social-service">{service}</span>
      <span className="social-account">{account}</span>
    </a>
  );
};

const Socials = ({ socialLinks }) => {
  return (
    <div className="socials-grid">
      {socialLinks.map((link) => (
        <SocialCard key={link.service} {...link} />
      ))}
    </div>
  );
};

export default Socials;
