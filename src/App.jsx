import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import CardContainer from "./components/CardContainer/CardContainer";
import banner from "./assets/images/banner_3.png";

const App = () => {
  const url = "https://api.punkapi.com/v2/beers";

  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getProducts = async () => {
    const res = await fetch(url + `?${searchInput}`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts({ searchInput });
  }, [{ searchInput }]);

  //

  const handleSearch = (event) => {
    const cleanedInput = event.target.value.toLowerCase();
    setSearchInput(cleanedInput);
  };

  // products.forEach((product) => {
  //   const cleanedProductName = product.name.toLowerCase();
  //   console.log(cleanedProductName);
  // });

  return (
    <div className="app">
      <Nav handleSearch={handleSearch} />
      <img className="app__banner" src={banner} alt="banner" />
      <CardContainer cards={products} />
    </div>
  );
};

export default App;
