import React from "react";
import "./ShopItem.css";

export default function ShopItem({ product }) {
  return (
    <div className="shop-item">
      <img src={product.img} alt={product.name} />
      <div className="info">
        <h3>{product.name}</h3>
        <p>{product.color}</p>
      </div>
      <div className="price-button-container">
        <div className="price">${product.price}</div>
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
}