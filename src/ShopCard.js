import React from "react";
import "./styles.css";

function ShopCard({ item }) {
  return (
    <div className="shop-card">
      <img src={item.img} alt={item.name} className="card-img"/>
      <h3>{item.name}</h3>
      <p>{item.color}</p>
      <div className="price">${item.price}</div>
      <button className="buy-btn">Купить</button>
    </div>
  );
}

export default ShopCard;