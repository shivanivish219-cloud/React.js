import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import Products from "./Products";



function ProductDetails(){
    const {id} =useParams();

    const [Product, setProduct]= useState(null);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data)=>{
            setProduct(data);
        });

    },[id]);

    if (!Product){
        return <h2>No Products Found</h2>;

    }

    return(
        <div>
            <img src={Product.image} width="200" />
              <h1>{Product.title}</h1>
              <h2>₹ {Product.price}</h2>
              <p>{Product.description}</p>
              <h3>{Product.category}</h3>
        </div>
    );
}

export default ProductDetails;