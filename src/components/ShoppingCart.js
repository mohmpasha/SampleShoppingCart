import React from "react";

const ShoppingCart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cart?.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
