import React, { useState, useEffect } from "react";
import Popular from "../../Components/Popular";
import Characters from "../../Components/Characters";
import Search from "../../Components/Search";
import Paginator from "../../Components/Paginator";
import { axiosCall } from "../../utils";
import "./PopularCharacters.scss";

const PopularCharacters = () => {
  const [pageData, setPageData] = useState(null);
  const [charactersInfo, setCharactersInfo] = useState(null);
  const [url, setUrl] = useState("https://swapi.co/api/people/?format=json");

  const fetchData = async () => {
    setPageData(null);
    const starships = await axiosCall({
      url
    });
    setPageData(starships.results);
    setCharactersInfo(starships);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    pageData && console.log({ count: pageData });
  }, [pageData]);


  return (
    <div className="popular-characters">
      <Search />
      <Popular name="Characters" hideViewMore>
        <div className="filters">
          <div className="gender-wrap">
            <label htmlFor="gender_select">FILTER</label>
            <select name="Gender" id="gender_select">
              <option value="Male" defaultValue>
                Male
              </option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="grid-wrap">
            <label htmlFor="grid_select">VIEW</label>
            <select name="View" id="grid_select">
              <option value="Grid" defaultValue>
                Grid
              </option>
              <option value="FemaRowle">Row</option>
            </select>
          </div>
        </div>

        <div className="container">
        {pageData
            ? pageData.map(({ gender, name, birth_year }, index) => (
                <Characters
                  year={birth_year}
                  name={name}
                  gender={gender}
                  key={index}
                />
              ))
            : "Loading..."}
        </div>
        {charactersInfo ? (
          <Paginator
            loading={pageData ? false : true}
            setUrl={setUrl}
            next={charactersInfo && charactersInfo.next}
            prev={charactersInfo && charactersInfo.previous}
            count={charactersInfo && charactersInfo.count}
          />
        ) : (
          ""
        )}
      </Popular>
    </div>
  );
};

export default PopularCharacters;