import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await axios.get(
      "https://run.mocky.io/v3/6f123615-8966-418b-8061-07b6036b892a"
    );
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>products</h2>
      {products?.length > 0 && (
        <ul className="list-group">
          {products?.map((product) => (
            <li
              key={product?.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{product?.name}</span>
              <span>${product?.price}</span>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
