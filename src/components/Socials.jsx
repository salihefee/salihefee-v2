import { useState } from "react";
import "./Socials.css";

const SocialCard = ({ service, account, url, disabled }) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 300);
    }
  };

  return (
    <a
      href={disabled ? "#" : url}
      onClick={handleClick}
      className={`social-card ${disabled ? "disabled-button" : ""} ${isShaking ? "scale-animation" : ""}`}
      target={disabled ? "_self" : "_blank"}
      rel="noreferrer"
    >
      <span className="social-service">{service}</span>
      <span className="social-account">{account}</span>
    </a>
  );
};

const Socials = ({ socialLinks }) => {
  return (
    <div className="socials-grid">
      {socialLinks.map((link, index) => (
        <SocialCard key={index} {...link} />
      ))}
    </div>
  );
};

export default Socials;
