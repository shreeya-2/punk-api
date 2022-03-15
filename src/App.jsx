import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import beers from "./data/beers";
import ProductCard from "./components/ProductCard/ProductCard";
import CardContainer from "./components/CardContainer/CardContainer";
import banner from "./assets/images/banner_1.png";

const App = () => {
  const createProductCard = beers.map((beer) => {
    return (
      //console.log({beer.name})

      <ProductCard
        //image={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        label={beer.abv}
      />
    );
  });

  return (
    <div className="app">
      <Nav />
      <img className="app__banner" src={banner} alt="banner image" />
      {/* <section className="app__content"> {createProductCard} </section> */}
    </div>
  );
};

export default App;
