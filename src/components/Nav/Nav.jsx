import React from "react";
import "./Nav.scss";
import FilterMenu from "../FilterMenu/FilterMenu";
import Searchbar from "../Searchbar/Searchbar";

const Nav = ({ searchInput, handleSearch, handleFilter, handleClick, showFilterMenu, setShowFilterMenu}) => {

  return (
    <div className="nav">
      <img onClick={handleClick}
        className="nav__filter-icon"
        src="https://api.iconify.design/bi/filter.svg"
        alt="discover menu icon"
      />

      {showFilterMenu && (
        <FilterMenu onClick={handleClick} handleInput={handleFilter}/>
      )}
      
      <h1 className="nav__header"> Brewdog </h1>

      <Searchbar searchInput={searchInput} handleSearch={handleSearch} />
    </div>
  );
};

export default Nav;
