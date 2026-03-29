import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Minecraft from "./pages/Minecraft/Minecraft";
import { ThemeProvider } from "./context/ThemeProvider";
import { useTurkeyTime } from "./hooks/useTurkeyTime";
import "./App.css";

function AppLayout() {
  const location = useLocation();
  const turkeyTime = useTurkeyTime();

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
  return (
    <ThemeProvider>
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;