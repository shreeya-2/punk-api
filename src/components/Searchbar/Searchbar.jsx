import React from "react";
import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <img
        className="searchbar__icon"
        src="https://api.iconify.design/fe/search.svg?color=whitesmoke"
        alt="search icon"
      />
      <input className="searchbar__input" />
    </div>
  );
};

export default Searchbar;
