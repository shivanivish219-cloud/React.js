import { useState } from "react";

function DarkTheme(){
    const [darkMode, setDarkMode]= useState(false);

    return(
        <div 
        style={{
            backgroundColor: darkMode? "black" : "white",
            color: darkMode? "white" : "black",
            minHeight: "100vh",
            padding: "30px",

        }}
        >
            <h1>Dark Theme Feature</h1>

            <button onClick={()=>setDarkMode(!darkMode)}>
                {darkMode? "light mode": "dark mode"}
                </button>
            </div>
    )
}

export default DarkTheme;