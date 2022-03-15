import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./CardContainer.scss";

const CardContainer = ({ cards }) => {
  const [showCardInfo, setShowCardInfo] = useState(false);

  const toggleCard = () => {
    setShowCardInfo(!showCardInfo);
  };

  return (
    <div className="card-container">
      {cards.map((product) => {
        return (
          // {showCardInfo &&
          <ProductCard
            image={product.image_url}
            name={product.name}
            tagline={product.tagline}
            label={product.abv}
            toggleCard={toggleCard}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
