import React from "react";
import { Link } from "react-router-dom";
import "./StarshipView.scss";
import Slide from "../../Components/Slide";
import Starships from "../../Components/Starship";
import logo from "../../assets/logo.png";
import { getImg } from "../../utils";
import useFetchData from "../../CustomHook/useFetchData";

const StarshipView = ({ match }) => {
  const starship = useFetchData(`https://swapi.co/api/starships/${match.params.id}/`) ;
  const formatDataList = (content) =>  content.results.slice(0, 9);
  const starshipSlide = useFetchData("https://swapi.co/api/starships/?format=json", formatDataList);


  return (
    <div className="starship-view">
      <div className="starship-view__img">
        <img src={getImg(starship && starship.starship_class)} alt="" />
        <Link to='/' className="starship-view__img__logo">
          <img src={logo} alt="" />
        </Link>
        <div className="title-wrap">
          <div className="edge1"></div>
          <h2>{starship ? starship.name : "Loading.."}</h2>
          <div className="edge2"></div>
        </div>
      </div>
      <div className="starship-view__content">
        <h2>{starship ? starship.name : "Loading.."}</h2>
        <p>
          <strong>Manufacturer : </strong>
          {starship && starship.manufacturer}
        </p>
        <p>
          <strong>Model : </strong>
          {starship && starship.model}
        </p>
        <p>
          <strong>Starship Class : </strong>
          {starship && starship.starship_class}
        </p>
        <p>
          <strong>Hyper drive rating : </strong>
          {starship && starship.hyperdrive_rating}
        </p>
        <p>
          <strong>Cargo capacity : </strong>
          {starship && starship.cargo_capacity}
        </p>
        <p>
          <strong>Crew : </strong>
          {starship && starship.crew}
        </p>
      </div>
      <div className="recently-viewed">
        <div className="recently-viewed__title">
          <h2>Recently viewed Starships</h2>
          <div className="line"></div>
        </div>
        <Slide>
        { starshipSlide.map(({ model, name, cargo_capacity, url, starship_class }, index) => (
            <Starships
              model={model}
              name={name}
              capacity={cargo_capacity}
              key={index}
              url={url}
              starshipClass={starship_class}
            />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default StarshipView;
