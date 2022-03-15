import React from "react";
import "./Nav.scss";
import FilterMenu from "../FilterMenu/FilterMenu";
import Searchbar from "../Searchbar/Searchbar";

const Nav = () => {
  return (
    <div className="nav">
      <FilterMenu />
      <h1 className="nav__header"> Brewdog </h1>
      <Searchbar />
    </div>
  );
};

export default Nav;
