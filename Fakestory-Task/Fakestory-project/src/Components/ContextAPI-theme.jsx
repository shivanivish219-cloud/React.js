import { createContext, useState, useContext } from "react";
import { useEffect } from "react";

export const ThemeContext = createContext();

function ContextTheme({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  });

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#222" : "#ffffff";

    document.body.style.color = darkMode ? "#ffffff" : "#000000";
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Header() {
  return <NavBar />;
}
function NavBar() {
  return <ProfileData />;
}

function ProfileData() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        // minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ContextTheme;
