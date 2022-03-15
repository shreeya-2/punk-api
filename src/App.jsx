import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import CardContainer from "./components/CardContainer/CardContainer";
import banner from "./assets/images/banner_1.png";

const App = () => {
  const url = "https://api.punkapi.com/v2/beers";

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app">
      <Nav />
      <img className="app__banner" src={banner} alt="banner" />
      <CardContainer cards={products} />
    </div>
  );
};

export default App;
