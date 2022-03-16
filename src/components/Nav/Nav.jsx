import React, { useState } from "react";
import "./Nav.scss";
import FilterMenu from "../FilterMenu/FilterMenu";
import Searchbar from "../Searchbar/Searchbar";

const Nav = ({ searchInput, handleSearch }) => {
  return (
    <div className="nav">
      <FilterMenu />
      <h1 className="nav__header"> Brewdog </h1>
      <Searchbar searchInput={searchInput} handleSearch={handleSearch} />
    </div>
  );
};

export default Nav;
