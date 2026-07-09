import { useState, useEffect } from "react";

function Commodities() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      {products.map((items) => (
        <div key={items.id}>
          <h3>{items.title}</h3>
          <p>{items.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Commodities;
