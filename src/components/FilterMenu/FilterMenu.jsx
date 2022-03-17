import React from "react";
import "./FilterMenu.scss";

const FilterMenu = (handleInput, handleClick) => {
  return (
    <div className="filter-menu">
      
      <div> 
        <img className="filter-menu__close" src="https://api.iconify.design/fluent/triangle-48-filled.svg?color=whitesmoke" alt="close menu" />
        <h3  className="filter-menu__heading"> Filter </h3>
      </div> 
      
      <div>
        <input className="filter-menu__checkbox" type="checkbox" id="filter_1" name="filter_1" value="filter_1"/>  
        <label className="filter-menu__label"for="filter_1"> High Alcohol </label>
      </div>

      <div>
        <input className="filter-menu__checkbox" type="checkbox" id="filter_2" name="filter_2" value="filter_2"/>  
        <label className="filter-menu__label" for="filter_2"> Classic Range </label> 
      </div>

      <div>  
       <input className="filter-menu__checkbox" type="checkbox" id="filter_3" name="filter_3" value="filter_3"/> 
       <label className="filter-menu__label" for="filter_3"> High Acidity </label> 
      </div> 

    </div>
  );
};

export default FilterMenu;
