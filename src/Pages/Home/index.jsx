import React, { useState, useEffect } from "react";
import Search from "../../Components/Search";
import Popular from "../../Components/Popular";
import Starships from "../../Components/Starship";
import Characters from "../../Components/Characters";
import Slide from "../../Components/Slide";
import Planet from "../../Components/Planet";
import { axiosCall } from "../../utils";

const Home = () => {
  const [starshipsData, setStarships] = useState([{}, {}, {}]);
  const [charactersData, setCharacters] = useState([{}, {}]);
  const [planetsData, setPlanets] = useState([{}, {}, {}]);

  const fetchData = async () => {
    const starships = await axiosCall({
      url: "https://swapi.co/api/starships/?format=json"
    });
    setStarships(starships.results.slice(0, 6));

    const characters = await axiosCall({
      url: "https://swapi.co/api/people/?format=json"
    });
    setCharacters(characters.results.slice(0, 4));

    const planets = await axiosCall({
      url: "https://swapi.co/api/planets/?format=json"
    });
    setPlanets(planets.results.slice(0, 9));
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Search />
      <Popular name="Starships" viewLink="/popular-starships">
        <div className="container">
          { starshipsData && starshipsData.map(({ model, name, cargo_capacity, url }, index) => (
            <Starships
              model={model}
              name={name}
              capacity={cargo_capacity}
              key={index}
              url={url}
            />
          ))}
        </div>
      </Popular>

      <Popular name="Planets" hideViewMore>
        <Slide>
          { planetsData.map(
                ({ population, name, gravity, url }, index) => (
                  <Planet
                    gravity={gravity}
                    name={name}
                    population={population}
                    key={index}
                    url={url}
                    img="https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg"
                  />
                )
              )
          }
        </Slide>
      </Popular>

      <Popular name="Characters" viewLink="/popular-characters">
        <div className="container character-contain">
          { charactersData.map(({ gender, name, birth_year, url }, index) => (
                <Characters
                  year={birth_year}
                  name={name}
                  gender={gender}
                  key={index}
                  url={url}
                />
              ))
            }
        </div>
      </Popular>
    </div>
  );
};

export default Home;
