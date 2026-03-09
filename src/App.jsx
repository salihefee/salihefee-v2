import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

const navbarLinks = [
  { label: "socials", href: "#socials" },
  { label: "projects", href: "#projects" },
];

function App() {
  return (
    <Router>
      <Navbar logoText="salihefee" links={navbarLinks} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <footer className="sticky-footer">
        <div className="wrap">
          <p className="footer-text">salihefee · made with react · UTC+3</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
