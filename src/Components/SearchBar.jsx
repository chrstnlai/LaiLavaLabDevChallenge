import "../App.css";
import React from 'react';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className ="SearchBar">
      <FaSearch id ="search-icon" />
      <div className = "searchtext">
        <input placeholder = "Search in Aro..."></input>
      </div>
      
    </div>
       
     
   
  );
}
