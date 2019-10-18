import React from "react";
import { Link } from "react-router-dom";
import "./Starships.scss";
import ReadMore from "../ReadMore";
import Skeleton from "react-loading-skeleton";
import { getImg } from "../../utils";

const Starships = ({ model, capacity, name, url, starshipClass }) => {
  return (
    <div className="starship">
      {name ? (
        <img src={getImg(starshipClass)} alt="" />
      ) : (
        <Skeleton height={192} />
      )}
      <div className="starship__card">
        <div className="starship__card__info">
          <p className="title">{name || <Skeleton />}</p>
          <p className="description">
            {capacity ? (
              <>
                <strong>Model: </strong> {model}
              </>
            ) : (
              <Skeleton />
            )}
          </p>
          <p className="description">
            {capacity ? (
              <>
                <strong>Cargo capacity : </strong> {capacity}
              </>
            ) : (
              <Skeleton />
            )}
          </p>
        </div>
        <div className="btn-wrap">
          {url && (
            <Link to={`/starship/${url && url.split("/")[5]}`}>
              <ReadMore />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Starships;
