import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import ThemeProvider from "./Components/ContextAPI-theme";
import { useContext } from "react";
// import Products from './Pages/Products.jsx'
// import SeconRouter from './React-Router/Router.jsx'

createRoot(document.getElementById("root")).render(
  // ReactDOM.createRoot(document.getElementById("root")).render(

  // <StrictMode>

  // </StrictMode>,
  <>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>,
);
