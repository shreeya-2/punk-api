import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./CardContainer.scss";

const CardContainer = ({ cards }) => {

  return (
    <div className="card-container">
      {cards.map((product) => {
        return (
          <ProductCard
            image={product.image_url}
            name={product.name}
            tagline={product.tagline}
            label={product.abv}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;


// if ({product.image_url} === null) {
//   productImage=("image not available")
// } else {
//   productImage={product.image_url}
// }