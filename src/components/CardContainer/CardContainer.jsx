import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./CardContainer.scss";

const CardContainer = ({ cards }) => {
  console.log({ cards });
  return (
    <div className="card-container">
      {cards.map((product) => {
        // console.log({product.name})
        return (
          <ProductCard
            image={product.image_url}
            name={product.name}
            tagline={product.tagline}
            label={product.abv}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
