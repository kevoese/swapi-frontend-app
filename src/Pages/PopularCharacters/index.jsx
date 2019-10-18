import React, { useState, useEffect, useRef } from "react";
import Popular from "../../Components/Popular";
import Characters from "../../Components/Characters";
import Search from "../../Components/Search";
import Paginator from "../../Components/Paginator";
import { axiosCall, handleFilter } from "../../utils";
import "./PopularCharacters.scss";

const PopularCharacters = () => {
  const [pageData, setPageData] = useState([{}, {}]);
  const [charactersInfo, setCharactersInfo] = useState(null);
  const [url, setUrl] = useState("https://swapi.co/api/people/?format=json");
  const selectRef = useRef();
  const [rawData, setRawData] = useState(null);

  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);

  const handleSearchChange = e => {
    const str = e.target.value.trim();
    if (str !== "") {
      setSearch(str);
      setReset(true);
      setUrl(`https://swapi.co/api/people/?format=json&search=${str}`);
      setReset(false)
    }
    else {
      setSearch(null);
      setUrl("https://swapi.co/api/people/?format=json")
    }
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      isMounted && setPageData([{}, {}]);
      search ? setLoading(true) : setLoading(false);
      const starships = await axiosCall({
        url
      });

      isMounted && setRawData(starships.results);
      isMounted &&
        setPageData(handleFilter(starships.results, selectRef.current.value));
      isMounted && setCharactersInfo(starships);
      search && setLoading(false);
    })();

    return () => (isMounted = false);
  }, [url, search]);

  const handleChange = e => {
    if (rawData) {
      const filtered = handleFilter(rawData, e.target.value);
      setPageData(filtered);
    }
  };

  return (
    <div className="popular-characters">
      <Search handleChange={handleSearchChange} loading={loading} />
      <Popular search={search} name="Characters" hideViewMore>
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
        {charactersInfo || reset ? (
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
