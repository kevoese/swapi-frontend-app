import React from "react";
import starship from "../../assets/starship-1.jpg";
import "./Starships.scss";

const Starships = ({ img, model, capacity, name }) => {
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
          <button>
            <span>Read More</span>
            <span className="icon">=></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Starships;
