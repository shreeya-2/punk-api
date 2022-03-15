import React from "react";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const { image, name, tagline, label } = props;

  return (
    <div className="product-card">
      <img> {image} </img>
      <h2> {name}</h2>
      <h3>{tagline}</h3>
      <p>{label}</p>
    </div>
  );
};

export default ProductCard;
