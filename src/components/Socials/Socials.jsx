import { useState } from "react";
import "./Socials.css";

const SocialCard = ({ service, account, url, disabled }) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    if (disabled) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 300);
    }
  };

  const className = `social-card ${disabled ? "disabled-button" : ""} ${isShaking ? "scale-animation" : ""}`.trim();

  if (disabled) {
    return (
      <div className={className} onClick={handleClick} role="button" aria-disabled="true">
        <span className="social-service">{service}</span>
        <span className="social-account">{account}</span>
      </div>
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
