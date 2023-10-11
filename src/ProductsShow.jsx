import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductsShow() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  const handleShowProducts = () => {
    axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  };

  useEffect(handleShowProducts, []);

  return (
    <div>
      <h1>Product info</h1>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <a href="/products">Back to all products</a>
    </div>
  );
}
