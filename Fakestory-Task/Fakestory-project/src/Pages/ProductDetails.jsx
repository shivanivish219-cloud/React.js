import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ThemeContext } from "../Components/ContextAPI-theme";
// import Products from "./Products";

function ProductDetails() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { id } = useParams();

  const [Product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!Product) {
    return <h2>No Products Found</h2>;
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "#fff",
          color: darkMode ? "#fff" : "#000",
          //   minHeight: "100vh",
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

      <img src={Product.image} />
      <h1>{Product.title}</h1>
      <h2>₹ {Product.price}</h2>
      <p>{Product.description}</p>
      <h3>{Product.category}</h3>
    </div>
  );
}

export default ProductDetails;
