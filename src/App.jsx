import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Minecraft from "./pages/Minecraft";
import "./App.css";

function AppLayout({ theme, setTheme, turkeyTime }) {
  const location = useLocation();

  const navbarLinks = location.pathname === "/mc"
    ? [
      { label: "info", href: "#server-info", external: false },
      { label: "join", href: "#how-to-join", external: false },
    ]
    : [
      { label: "socials", href: "#socials", external: false },
      { label: "projects", href: "#projects", external: false },
    ];

  return (
    <>
      <Navbar logoText="salihefee" links={navbarLinks} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
          <Route path="/mc" element={<Minecraft theme={theme} setTheme={setTheme} />} />
        </Routes>
      </div>
      <footer>
        <div className="wrap">
          <p className="footer-text">salihefee · made with react · {turkeyTime} UTC+3</p>
        </div>
      </footer>
    </>
  );
}

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
    let timer;
    const tick = () => {
      setTime(new Date());
      const msUntilNextMinute = 60000 - (Date.now() % 60000);
      timer = setTimeout(tick, msUntilNextMinute);
    };

    timer = setTimeout(tick, 60000 - (Date.now() % 60000));
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
      <AppLayout theme={theme} setTheme={setTheme} turkeyTime={turkeyTime} />
    </Router>
  );
}

export default App;
