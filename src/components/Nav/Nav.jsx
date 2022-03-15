import React, { useState } from "react";
import "./Nav.scss";
import FilterMenu from "../FilterMenu/FilterMenu";
import Searchbar from "../Searchbar/Searchbar";
//import beers from "./data/beers";
const Nav = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    const cleanedInput = event.target.value.toLowerCase();
    searchInput(cleanedInput);
  };

  // const beers.forEach((beer) => {
  //   const cleanBeerName = beer.name.toLowerCase();
  //   return cleanBeerName.includes(searchInput);
  // });

  //&&ProductCard?

  return (
    <div className="nav">
      <FilterMenu />
      <h1 className="nav__header"> Brewdog </h1>
      <Searchbar searchInput={searchInput} handleSearch={handleSearch} />
    </div>
  );
};

export default Nav;
