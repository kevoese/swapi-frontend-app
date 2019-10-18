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
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const str = e.target.value.trim();
    if (str !== "") setSearch(str);
    else setSearch(null);
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      isMounted && search ? setLoading(true) : setLoading(false);
      const starships = await axiosCall({
        url: `https://swapi.co/api/starships/?format=json${
          search ? `&search=${search}` : ""
        }`
      });
      isMounted && setStarships(starships.results.slice(0, 6));
      const characters = await axiosCall({
        url: `https://swapi.co/api/people/?format=json${
          search ? `&search=${search}` : ""
        }`
      });
      isMounted && setCharacters(characters.results.slice(0, 4));
      const planets = await axiosCall({
        url: `https://swapi.co/api/planets/?format=json${
          search ? `&search=${search}` : ""
        }`
      });
      isMounted && setPlanets(planets.results.slice(0, 9));
      isMounted && search && setLoading(false);
    })();
    return () => isMounted = false;
  }, [search]);

  return (
    <div>
      <Search handleChange={handleChange} loading={loading} />
      <Popular search={search} name="Starships" viewLink="/popular-starships">
        {starshipsData.length > 1 ? (
          <div className="container">
            {starshipsData.map(
              ({ model, name, cargo_capacity, url, starship_class}, index) => (
                <Starships
                  model={model}
                  name={name}
                  starshipClass={starship_class}
                  capacity={cargo_capacity}
                  key={index}
                  url={url}
                />
              )
            )}
          </div>
        ) : (
          <p className="not-found">Sorry!! No Starshship Found.</p>
        )}
      </Popular>

      <Popular search={search} name="Planets" hideViewMore>
        {planetsData.length > 1 ? (
          <Slide>
            {planetsData.map(({ population, name, gravity, url, climate }, index) => (
              <Planet
                gravity={gravity}
                name={name}
                population={population}
                key={index}
                url={url}
                climate={climate}
                img="https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg"
              />
            ))}
          </Slide>
        ) : (
          <p className="not-found">Sorry!! No Planet Found.</p>
        )}
      </Popular>

      <Popular search={search} name="Characters" viewLink="/popular-characters">
        {charactersData.length > 1 ? (
          <div className="container character-contain">
            {charactersData.map(({ gender, name, birth_year, url }, index) => (
              <Characters
                year={birth_year}
                name={name}
                gender={gender}
                key={index}
                url={url}
              />
            ))}
          </div>
        ) : (
          <p className="not-found">Sorry!! No Character Found.</p>
        )}
      </Popular>
    </div>
  );
};

export default Home;
