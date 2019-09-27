import React from "react";
import starship from "../../assets/starship-1.jpg";
import "./Starships.scss";

const Starships = ({ img, description, title }) => {
  return (
    <div className="starship">
      <img src={starship} alt="" />
      <div className="starship__card">
        <div className="starship__card__info">
          <p className="title">Luke skyle walker</p>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            ratione nobis qui nam eveniet quos, consequuntur nostrum quas quae,
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
