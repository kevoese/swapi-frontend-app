import React, { useState, useEffect } from "react";
import Search from "../../Components/Search";
import Popular from "../../Components/Popular";
import Starships from "../../Components/Starship";
import Characters from "../../Components/Characters";
import Slide from "../../Components/Slide";
import Planet from "../../Components/Planet";
import { axiosCall } from "../../utils";

const Home = () => {
  const [starshipsData, setStarships] = useState(null);
  const [charactersData, setCharacters] = useState(null);
  const [planetsData, setPlanets] = useState(null);

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
      <Popular name="Starships" viewLink = "/popular-starships">
        <div className="container">
          {starshipsData
            ? starshipsData.map(({ model, name, cargo_capacity }, index) => (
                <Starships
                  model={model}
                  name={name}
                  capacity={cargo_capacity}
                  key={index}
                />
              ))
            : "Loading..."}
        </div>
      </Popular>

      <Popular name="Planets" hideViewMore>
        <Slide>
          {planetsData
            ? planetsData.map(({ population, name, temperature }, index) => (
                <Planet
                  temperature={temperature}
                  name={name}
                  population={population}
                  key={index}
                  img="https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg"
                />
              ))
            : "Loading..."}
        </Slide>
      </Popular>

      <Popular name="Characters"  viewLink = "/popular-characters">
        <div className="container">
          {charactersData
            ? charactersData.map(({ gender, name, birth_year }, index) => (
                <Characters
                  year={birth_year}
                  name={name}
                  gender={gender}
                  key={index}
                />
              ))
            : "Loading..."}
        </div>
      </Popular>
    </div>
  );
};

export default Home;
