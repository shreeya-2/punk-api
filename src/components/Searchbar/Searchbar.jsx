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
        value={searchInput}
        onChange={handleSearch}
        label="Search"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;

//pseudocode:
//1. convert search input into lower case
//2. convert beer array name/data into lower case
//3. see if cleaned data includes cleaned search input
//4. if included, get corresponding object id (or array index, slice -1)
//(if not included return alert message of "not found")
//5. then change url to apend id
//6. use effects to re-render on url change + return relevant product card(s)
