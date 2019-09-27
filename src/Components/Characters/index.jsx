import React from "react";
import character from "../../assets/character-1.jpg";
import "./Characters.scss";

const Characters = () => {
  return (
    <div className="character">
      <img src={character} alt="" />
      <div className="character__card">
        <div className="title">
          <p className="name">Luke Skywalker</p>
          <small className="role">Son of Anon</small>
        </div>
        <div className="description">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          provident sunt! Voluptatem quisquam et Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate, provident sunt! Voluptatem
          quisquam etLorem ipsum dolor sit amet consectetur adipisicing elit.
          Cupiditate, provident sunt! Voluptatem quisquam et
        </p>
        <div className="read-more">
          <a>Read more</a>
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Characters;
