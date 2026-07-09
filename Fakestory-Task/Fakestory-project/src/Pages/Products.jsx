import { useContext, useEffect, useState, useMemo } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../Components/ContextAPI-theme";

function Products() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("Filtering Products....");
    return (
      products

        .filter((item) => category === "" || item.category === category)
        // : products;

        .filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase()),
        )
    );
  }, [products, category, search]);

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

      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={(e) => setSearch(e.target.value)}>search</button>

      <button onClick={() => setCategory("")}>All</button>

      <button onClick={() => setCategory("electronics")}>Electronics</button>

      <button onClick={() => setCategory("jewelery")}>Jewelery</button>

      <button onClick={() => setCategory("men's clothing")}>
        Men's Clothing
      </button>

      <button onClick={() => setCategory("women's clothing")}>
        Women's Clothing
      </button>

      {filteredProducts.map((item) => (
        <Link
          key={item.id}
          to={`/products/${item.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            style={{
              border: "1px solid gray",
              margin: "20px",
              padding: "10px",
            }}
          >
            <img src={item.image} width="120" alt={item.title} />

            <h3>{item.title}</h3>

            <h2>₹ {item.price}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
