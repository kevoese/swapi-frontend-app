import React from "react";
import { Link } from "react-router-dom";
import character from "../../assets/character-1.jpg";
import "./Characters.scss";
import ReadMore from "../ReadMore";
import Skeleton from "react-loading-skeleton";

const Characters = ({ name, year, gender, url }) => {
  return (
    <div className="character">
      {name ? <img src={character} alt="" /> : <div  className="img-loader"><Skeleton height={288}/></div>}
      <div className="character__card">
        <div className="title">
          <p className="name">{name || <Skeleton />}</p>
        </div>
        <div className="description">
          <p>
            {year ? (
              <>
                <strong>Birth Year : </strong> {year}
              </>
            ) : (
              <Skeleton />
            )}
          </p>
          <p>
            {gender ? (
              <>
                <strong>Gender : </strong> {gender}
              </>
            ) : (
              <Skeleton />
            )}
          </p>
          <div className="read-more">
            {url && (
              <Link to={`/character/${url && url.split("/")[5]}`}>
                <ReadMore />{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
