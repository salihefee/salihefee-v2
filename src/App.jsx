import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Minecraft from "./pages/Minecraft/Minecraft";
import { ThemeProvider } from "./context/ThemeProvider";
import "./App.css";

function AppLayout({ turkeyTime }) {
  const location = useLocation();

  const navbarLinks =
    location.pathname === "/mc"
      ? [
          { label: "info", href: "#server-info" },
          { label: "join", href: "#how-to-join" },
        ]
      : [
          { label: "socials", href: "#socials" },
          { label: "projects", href: "#projects" },
        ];

  return (
    <>
      <Navbar logoText="salihefee" links={navbarLinks} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mc" element={<Minecraft />} />
        </Routes>
      </div>
      <footer>
        <div className="wrap">
          <p className="footer-text">
            salihefee · made with react ·{" "}
            <Link className="invisible-button" to="/mc">
              minecraft server
            </Link>{" "}
            · {turkeyTime} UTC+3
          </p>
        </div>
      </footer>
    </>
  );
}

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = () => setTime(new Date());

    let interval;
    const timeout = setTimeout(
      () => {
        tick();
        interval = setInterval(tick, 60000);
      },
      60000 - (Date.now() % 60000)
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const turkeyTime = time.toLocaleTimeString("en-GB", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <ThemeProvider>
      <Router>
        <AppLayout turkeyTime={turkeyTime} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
