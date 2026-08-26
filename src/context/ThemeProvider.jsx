import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "blue";
    return localStorage.getItem("theme") === "pink" ? "pink" : "blue";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme === "pink" ? "pink" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
