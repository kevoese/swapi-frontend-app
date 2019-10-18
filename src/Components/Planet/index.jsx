import React from "react";
import { Link } from "react-router-dom";
import "./Planet.scss";
import Skeleton from "react-loading-skeleton";
import { getPlanetImg } from '../../utils';

const Planet = ({ climate, name, gravity, population, url }) => {
  return (
    <>
      {
          name ? <div
        className="planet"
        style={{
          background: `linear-gradient(180deg, rgba(183, 183, 183, 0) 74.48%, #000000 80.46%), url("${getPlanetImg(climate)}")`
        }}
      >
      <p className="gravity">{`${gravity && gravity.split(' ')[0]}G`}</p>
        <p className="population"><strong>Population :  </strong>{population}</p>
        <Link className="planetHover" to={`/planet/${url && url.split("/")[5]}`}>
          <p className="text">{name}</p>
        </Link>
      </div>
      :
      <div className="planet-skeleton">
        <Skeleton height={320} />
      </div>
      }
    </>
  );
};

export default Planet;
