

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      if (result.data) {
        setProducts(result.data);
      }
    });
  }, []);

  return (
    <div>
      <h1>My Products</h1>
      <ul style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {products.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                padding: 12,
                border: "1px solid silver",
                width: "180px",
                listStyleType: "none",
              }}
            >
              <Link to={`/product/${item.id}`}>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyProducts;