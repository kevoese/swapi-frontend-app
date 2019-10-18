import React, { useState, useEffect, useRef } from "react";
import Popular from "../../Components/Popular";
import Characters from "../../Components/Characters";
import Search from "../../Components/Search";
import Paginator from "../../Components/Paginator";
import { axiosCall } from "../../utils";
import "./PopularCharacters.scss";

const PopularCharacters = () => {
  const [pageData, setPageData] = useState([{}, {}]);
  const [charactersInfo, setCharactersInfo] = useState(null);
  const [url, setUrl] = useState("https://swapi.co/api/people/?format=json");
  const selectRef = useRef();
  const [rawData, setRawData] = useState([null]);

  const handleFilter = (arr, filterBy) => {
    if (filterBy === "all" || filterBy === "choose") return arr;
    if (filterBy === "others") {
      let res = arr.filter(
        ({ gender }) => gender !== "male" && gender !== "female"
      );
      return res;
    }

    const filtered = arr.filter(({ gender }) => gender === filterBy);
    return filtered;
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      isMounted && setPageData([{}, {}]);
      const starships = await axiosCall({
        url
      });
      isMounted && setRawData(starships.results);
      isMounted &&
        setPageData(handleFilter(starships.results, selectRef.current.value));
      isMounted && setCharactersInfo(starships);
    })();

    return () => (isMounted = false);
  }, [url]);

  const handleChange = e => {
    const filtered = handleFilter(rawData, e.target.value);
    setPageData(filtered);
  };

  return (
    <div className="popular-characters">
      <Search />
      <Popular name="Characters" hideViewMore>
        <div className="filters">
          <div className="gender-wrap">
            <label htmlFor="gender_select">FILTER</label>
            <select
              ref={selectRef}
              onChange={handleChange}
              defaultValue="choose"
              name="Gender"
              id="gender_select"
            >
              <option value="choose" disabled>
                Choose Gender
              </option>
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <div className="container character-contain">
          {pageData
            ? pageData.map(({ gender, name, birth_year, url }, index) => (
                <Characters
                  year={birth_year}
                  name={name}
                  gender={gender}
                  key={index}
                  url={url}
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
