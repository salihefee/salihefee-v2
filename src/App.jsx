"use client";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { ThemeProvider } from "./context/ThemeProvider";
import { useTurkeyTime } from "./hooks/useTurkeyTime";

function AppLayout() {
  const turkeyTime = useTurkeyTime();
  const navbarLinks = [
    { label: "socials", href: "#socials" },
    { label: "projects", href: "#projects" },
  ];

  return (
    <>
      <Navbar logoText="salihefee" links={navbarLinks} />
      <div className="container">
        <Home />
      </div>
      <footer>
        <div className="wrap">
          <p className="footer-text">
            salihefee · made with next.js & assisted by claude · {turkeyTime} UTC+3
          </p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
