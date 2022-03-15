import React from "react";
import "./Searchbar.scss";

const Searchbar = (props) => {
  const { searchInput, handleSearch } = props;
  return (
    <div className="searchbar">
      <img
        className="searchbar__icon"
        src="https://api.iconify.design/fe/search.svg"
        alt="search icon"
      />
      <input
        className="searchbar__input"
        type="text"
        value={searchInput}
        onInput={handleSearch}
        label="Search"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
