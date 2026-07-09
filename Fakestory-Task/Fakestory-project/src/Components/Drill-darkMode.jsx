// 4 level deep component structure
import { useState } from "react";
// Level 1 - Sabse upar wala component, jiske paas data hai
function DarkTheme() {
  const [darkMode, setDarkMode] = useState(false); // ye data sabse niche wale component ko chahiye
 
     const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  return(
   <Header 
   darkMode={darkMode} 
   toggleTheme={toggleTheme} />);
}

// Level 2 - Parent ko userName ki koi zaroorat nahi, sirf forward kar raha hai
function Header({ darkMode, toggleTheme }) {
  return( <NavBar 
  darkMode={darkMode} 
  toggleTheme={toggleTheme} />);
}

// Level 3 - Child ko bhi koi zaroorat nahi, sirf aage bhej raha hai
function NavBar({ darkMode, toggleTheme }) {
   return (
   <ProfileIcon 
   darkMode={darkMode} 
   toggleTheme={toggleTheme} />);
}

// Level 4 - Yaha actually userName use ho raha hai
function ProfileIcon({ darkMode, toggleTheme }) {
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleTheme}> click here
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default DarkTheme;



