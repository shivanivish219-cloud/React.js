import { useEffect, useState } from "react";
import { Link } from "react-router";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });

    }, []);

    return (
        <div>

            <h1>Products</h1>

            {
                products.map((item) => (

                    <Link
                        key={item.id}
                        to={`/products/${item.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                    >

                        <div
                            style={{
                                border: "1px solid gray",
                                margin: "20px",
                                padding: "10px"
                            }}
                        >

                            <img
                                src={item.image}
                                width="120"
                                alt={item.title}
                            />

                            <h3>{item.title}</h3>

                            <h2>₹ {item.price}</h2>

                        </div>

                    </Link>

                ))
            }

        </div>
    );

}

export default Products;