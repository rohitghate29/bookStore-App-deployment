import { useEffect, useState } from "react";
import client from "./shopifyClient";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client.product.fetchAll().then((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, []);

  return (
    <div>
      <h1>Shopify Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img
              src={product.images[0]?.src}
              alt={product.title}
              width="150"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
