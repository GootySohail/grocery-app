import React from "react";

const GroceryList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item._id}>
        {item.name} - ₹{item.price} × {item.quantity}
      </li>
    ))}
  </ul>
);

export default GroceryList;
