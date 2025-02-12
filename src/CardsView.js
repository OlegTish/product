import React from "react";
import ShopCard from "./ShopCard";
import "./CardsView.css";

export default function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} product={card} />
      ))}
    </div>
  );
}