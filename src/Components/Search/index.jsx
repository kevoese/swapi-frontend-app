import React from "react";
import { Link } from 'react-router-dom';
import "./index.scss";
import logo from "../../assets/logo.png";

const Search = () => {
  return (
    <div className="search">
      <Link to ='/' className="search__page-logo">
        <img src={logo} alt="" />
      </Link>
      <div className="search__title">
        <img src={logo} alt="" />
        <p>Directory</p>
      </div>
      <div className="search__info">
        Find your favourite Characters, Films, Species, Starships and Planets
      </div>
      <input
        type="text"
        placeholder="Enter a Search term"
        className="search__input"
      />
    </div>
  );
};

export default Search;
