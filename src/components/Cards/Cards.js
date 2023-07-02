import React from "react";
import "./cards.css";
import { CardsData } from "../../utils/CardsData";

const Cards = () => {
  return (
    <div className="cards-container">
      {CardsData.map((card, index) => (
        <div key={index} className={`${card.bgColor} each-card`}>
          <span className="ml-auto mb-2 text-2xl">{card.iconImage}</span>
          <span className="text-xs lg:text-xs font-normal">{card.name}</span>
          <span className="text-xs lg:text-base font-bold">{card.data}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
