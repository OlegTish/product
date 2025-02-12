import React from "react";
import "./ShopCard.css";

export default function ShopCard({ product }) {
  return (
    <div className="shop-card">
      <h3>{product.name}</h3>
      <p>{product.color}</p>
      <img src={product.img} alt={product.name} />
      <div className="price-button-container">
        <div className="price">${product.price}</div>
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
}