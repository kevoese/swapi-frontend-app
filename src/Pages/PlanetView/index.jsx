import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PlanetView.scss";
import Slide from "../../Components/Slide";
import Planet from "../../Components/Planet";
import logo from "../../assets/logo.png";
import { axiosCall, getPlanetImg } from "../../utils";

const PlanetView = ({ match }) => {
  const [planet, setPlanet] = useState(null);
  const [planetSlide, setPlanetSlide] = useState([{},{},{},{},{},{}]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const content = await axiosCall({
        url: `https://swapi.co/api/planets/${match.params.id}/`
      });
      isMounted && setPlanet(content);
      const planets = await axiosCall({
        url: "https://swapi.co/api/planets/?format=json"
      });
      isMounted && setPlanetSlide(planets.results.slice(0, 9));
    })();
    return () => (isMounted = false);
  }, [match.params.id]);

  return (
    <div className="planet-view">
      <div
        className="planet-view__img"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 99.99%, rgba(255, 255, 255, 0) 100%), url(${getPlanetImg(planet && planet.climate)}) no-repeat center`,
        }}
      >
        <Link to="/" className="planet-view__img__logo">
          <img src={logo} alt="" />
        </Link>
        <div className="title-wrap">
          <div className="edge1"></div>
          <h2>{planet ? planet.name : "Loading.."}</h2>
          <div className="edge2"></div>
        </div>
      </div>
      <div className="planet-view__content">
        <h2>{planet ? planet.name : "Loading.."}</h2>
        <p>
          <strong>Climate : </strong>
          {planet && planet.climate}
        </p>
        <p>
          <strong>Terrain : </strong>
          {planet && planet.terrain}
        </p>
        <p>
          <strong>Gravity : </strong>
          {planet && planet.gravity}
        </p>
        <p>
          <strong>Population : </strong>
          {planet && planet.population}
        </p>
        <p>
          <strong>Diameter : </strong>
          {planet && planet.diameter}
        </p>
        <p>
          <strong>Orbital Period : </strong>
          {planet && planet.orbital_period}
        </p>
        <p>
          <strong>Rotation Period : </strong>
          {planet && planet.rotation_period}
        </p>
      </div>
      <div className="recently-viewed">
        <div className="recently-viewed__title">
          <h2>Recently viewed Planet</h2>
          <div className="line"></div>
        </div>
        <Slide>
          {planetSlide.map(
                ({ population, name, gravity, climate, url }, index) => (
                  <Planet
                    gravity={gravity}
                    name={name}
                    population={population}
                    key={index}
                    url={url}
                    climate={climate}
                    img="https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg"
                  />
                )
              )
            }
        </Slide>
      </div>
    </div>
  );
};

export default PlanetView;
