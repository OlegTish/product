import React from "react";
import "./styles.css";

function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <img src={item.img} alt={item.name} className="list-img"/>
      <div className="info">
        <h3>{item.name}</h3>
        <p>{item.color}</p>
      </div>
      <div className="price">${item.price}</div>
      <button className="buy-btn">Купить</button>
    </div>
  );
}

export default ShopItem;