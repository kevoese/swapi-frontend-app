import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CharacterView.scss";
import characterImg from "../../assets/character-1.jpg";
import Slide from "../../Components/Slide";
import Characters from "../../Components/Characters";
import logo from "../../assets/logo.png";
import { axiosCall } from "../../utils";

const CharacterView = ({ match }) => {
  const [character, setCharacter] = useState(null);
  const [characterSlide, setCharacterSlide] = useState(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const content = await axiosCall({
        url: `https://swapi.co/api/people/${match.params.id}/`
      });
      isMounted && setCharacter(content);

      const characters = await axiosCall({
        url: "https://swapi.co/api/people/?format=json"
      });
      isMounted && setCharacterSlide(characters.results.slice(0, 9));
    })();
    return () => (isMounted = false);
  }, [match.params.id]);

  return (
    <div className="character-view">
      <div
        className="character-view__img"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 99.99%, rgba(255, 255, 255, 0) 100%), url(${characterImg}) no-repeat center`,
          backgroundSize: "cover"
        }}
      >
        {/* <img className="people" src={characterImg} alt="" /> */}
        <Link to="/" className="character-view__img__logo">
          <img className src={characterImg(character && character.gender)} alt="" />
        </Link>
        <div className="title-wrap">
          <div className="edge1"></div>
          <h2>{character ? character.name : "Loading.."}</h2>
          <div className="edge2"></div>
        </div>
      </div>
      <div className="character-view__content">
        <h2>{character ? character.name : "Loading.."}</h2>
        <p>
          <strong>Gender : </strong>
          {character && character.gender}
        </p>
        <p>
          <strong>Height : </strong>
          {character && character.height}
        </p>
        <p>
          <strong>Eye Color : </strong>
          {character && character.eye_color}
        </p>
        <p>
          <strong>Skin Color : </strong>
          {character && character.skin_color}
        </p>
        <p>
          <strong>Hair Color : </strong>
          {character && character.hair_color}
        </p>
        <p>
          <strong>Birth Year : </strong>
          {character && character.birth_year}
        </p>
        <p>
          <strong>Mass : </strong>
          {character && character.mass}
        </p>
      </div>
      <div className="recently-viewed">
        <div className="recently-viewed__title">
          <h2>Recently viewed Characters</h2>
          <div className="line"></div>
        </div>
        <Slide>
          {characterSlide
            ? characterSlide.map(({ gender, name, birth_year, url }, index) => (
                <Characters
                  year={birth_year}
                  name={name}
                  gender={gender}
                  key={index}
                  url={url}
                />
              ))
            : "Loading..."}
        </Slide>
      </div>
    </div>
  );
};

export default CharacterView;
