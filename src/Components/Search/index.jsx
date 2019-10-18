import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import logo from "../../assets/logo.png";
import loader from '../../assets/loader.gif'

const Search = ({ handleChange, loading }) => {
  return (
    <div className="search">
      <Link to="/" className="search__page-logo">
        <img src={logo} alt="" />
      </Link>
      <div className="search__title">
        <img src={logo} alt="" />
        <p>Directory</p>
      </div>
      <p className="search__info">
        Find your favourite Characters, Films, Species, Starships and Planets
      </p>
      <div className="search__input-wrap">
        <input
          type="text"
          placeholder="Enter a Search term"
          className="search__input-wrap__input"
          onChange={handleChange}
        />
        {loading ? <img className="loader" src={loader} alt="loading" /> : ''}
      </div>
    </div>
  );
};

export default Search;
