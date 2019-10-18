import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./StarshipView.scss";
import starshipImg from "../../assets/starship-1.jpg";
import Slide from "../../Components/Slide";
import Starships from "../../Components/Starship";
import logo from "../../assets/logo.png";
import { axiosCall } from "../../utils";

const StarshipView = ({ match }) => {
  const [starship, setStarship] = useState(null);
  const [starshipSlide, setStarshipSlide] = useState([{},{},{},{},{},{}]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const content = await axiosCall({
        url: `https://swapi.co/api/starships/${match.params.id}/`
      });
      isMounted && setStarship(content);
      const starships = await axiosCall({
        url: "https://swapi.co/api/starships/?format=json"
      });
      isMounted && setStarshipSlide(starships.results.slice(0, 9));
    })();
    return () => isMounted = false;
  }, [match.params.id]);

  return (
    <div className="starship-view">
      <div className="starship-view__img">
        <img src={starshipImg} alt="" />
        <Link to='/' className="starship-view__img__logo">
          <img src={logo} alt="" />
        </Link>
        <div className="title-wrap">
          <div className="edge1"></div>
          <h2>{starship ? starship.name : "Loading.."}</h2>
          <div className="edge2"></div>
        </div>
        <div className="arrows">
          <div className="left">
            <svg
              width="32"
              height="32"
              viewBox="0 0 58 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.5764 60.9852L39.6672 13.7252L7.75655 36.4325L39.5764 60.9852Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="right">
            <svg
              width="32"
              height="32"
              viewBox="0 0 56 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7883 60.9852L17.7007 13.7252L48.5109 36.4325L17.7883 60.9852Z"
                fill="white"
              />
            </svg>
          </div>
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
        { starshipSlide.map(({ model, name, cargo_capacity, url }, index) => (
            <Starships
              model={model}
              name={name}
              capacity={cargo_capacity}
              key={index}
              url={url}
            />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default StarshipView;
