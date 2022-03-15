import React from "react";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const { image, name, tagline, label } = props;

  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt={name} />
      <h2 className="product-card__heading"> {name}</h2>
      <h3 className="product-card__subheading">{tagline}</h3>
      <p className="product-card__label">{`ABV ${label} %`}</p>
      {/* <button> more info </button> */}
    </div>
  );
};

export default ProductCard;
