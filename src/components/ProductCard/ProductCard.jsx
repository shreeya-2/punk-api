import React, {useState} from "react";
import "./ProductCard.scss";
//import CardInfo from "../CardInfo/CardInfo"

const ProductCard = (props) => {
  const { image, name, tagline, description, label} = props;

  const [showCardInfo, setShowCardInfo] = useState(false);

  const toggleCard = () => {
    setShowCardInfo(!showCardInfo);
  };

  const CardInfoJSX = (
    <div className="card-info"> 
      <h2 className="card-info__heading"> {name} </h2>
      <p className="card-info__content"> {description} </p> 
    </div>
  );

  const ProductCardJSX = (
    <div className="product-card"  onClick={toggleCard}>
        <img className="product-card__image" src={image} alt={name} />
        <h2 className="product-card__heading"> {name}</h2>
        <h3 className="product-card__subheading">{tagline}</h3>
        <p className="product-card__label">{`ABV ${label} %`}</p>
    </div>
  )

  return (
    
    <div className="product-card"  onClick={toggleCard}>
     {showCardInfo ? CardInfoJSX : ProductCardJSX} 
    </div>
  );
};

export default ProductCard;

