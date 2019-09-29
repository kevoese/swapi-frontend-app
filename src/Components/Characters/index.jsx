import React from "react";
import { Link } from 'react-router-dom';
import character from "../../assets/character-1.jpg";
import "./Characters.scss";

const Characters = ({ name, year, gender}) => {
  return (
    <div className="character">
      <img src={character} alt="" />
      <div className="character__card">
        <div className="title">
          <p className="name">{ name }</p>
        </div>
        <div className="description">
          <p>
          <strong>Birth Year : </strong> {year}
        </p>
        <p>
          <strong>Gender : </strong> {gender}
        </p>
        <div className="read-more">
          <Link to='/'>Read more</Link>
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Characters;
