import { useTheme } from "../Context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>{theme === "dark" ? "🌞" : "🌙"}</button>
  );
}
export default ThemeToggle;
