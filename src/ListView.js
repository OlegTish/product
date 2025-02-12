import React from "react";
import ShopItem from "./ShopItem";
import "./ListView.css";

export default function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map((item, index) => (
        <ShopItem key={index} product={item} />
      ))}
    </div>
  );
}