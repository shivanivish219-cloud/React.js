import { useEffect, useState } from "react";
import axios from "axios";

let counter = 1;

function APIaxios() {
  const [products, setProducts] = useState([]);

  //   USING FETCH CALL API--------------------------------------------------------------------------
  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((data) => data.json())
  //       .then((data) => {
  //         counter++;
  //         console.log("Data: ", data);
  //         setProducts(data);
  //       });
  //   }, []);

  // WITHOUT USEEFFECT----------------------------------------------------
  //    fetch("https://fakestoreapi.com/products")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       counter++;
  //       console.log("Data: ", data);
  //       setProducts(data);
  //     });

  // USIN ASYNCH AWAIT CALL API-------------------------------------------------
  //   const getProduct = async () => {
  //     const apiResponse = await fetch("https://fakestoreapi.com/products");
  //     const parsedResponse = await apiResponse.json();
  //     counter++;
  //     setProducts(parsedResponse);
  //   };

  //   useEffect(() => {
  //     getProduct();
  //   }, []);

  // USING AXIOS CALL API---------------------------------------------------------
  const getProduct = async () => {
    const apiResponse = await axios.get("https://fakestoreapi.com/products");
    counter++;

    setProducts(apiResponse.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log("Re-Render: ", products, counter);
  return (
    <div>
      <h1>My Products</h1>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default APIaxios;
