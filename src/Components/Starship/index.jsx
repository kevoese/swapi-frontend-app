import React from "react";
import { Link } from "react-router-dom";
import starship from "../../assets/starship-1.jpg";
import "./Starships.scss";

const Starships = ({ img, model, capacity, name, url }) => {
  return (
    <div className="starship">
      <img src={starship} alt="" />
      <div className="starship__card">
        <div className="starship__card__info">
          <p className="title">{name}</p>
          <p className="description">
            <strong>Model : </strong> {model}
          </p>
          <p className="description">
            <strong>Cargo capacity : </strong> {capacity}
          </p>
        </div>
        <div className="btn-wrap">
          <Link to={`starship/${url && url.split('/')[5]}`}>
            <button>
              <span>Read More</span>
              <span className="icon">></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Starships;
