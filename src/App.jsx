import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

const navbarLinks = [
  { label: "socials", href: "#socials" },
  { label: "projects", href: "#projects" },
];

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "blue",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme === "pink" ? "pink" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);


  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setTime(new Date());
      const msUntilNextMinute = 60000 - (Date.now() % 60000);
      timer = setTimeout(tick, msUntilNextMinute);
    };

    let timer = setTimeout(tick, 60000 - (Date.now() % 60000));
    return () => clearTimeout(timer);
  }, []);

  const turkeyTime = time.toLocaleTimeString("en-GB", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Router>
      <Navbar logoText="salihefee" links={navbarLinks} theme={theme} setTheme={setTheme} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        </Routes>
      </div>
      <footer>
        <div className="wrap">
          <p className="footer-text">salihefee · made with react · {turkeyTime} UTC+3</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
