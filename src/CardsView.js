import React from "react";
import ShopCard from "./ShopCard";
import "./styles.css";

function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} item={card} />
      ))}
    </div>
  );
}

export default CardsView;