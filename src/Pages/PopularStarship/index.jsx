import React, { useState, useEffect } from "react";
import Popular from "../../Components/Popular";
import Starships from "../../Components/Starship";
import Search from "../../Components/Search";
import Paginator from "../../Components/Paginator";
import { axiosCall } from "../../utils";

const PopularStarships = () => {
  const [pageData, setPageData] = useState([{}, {}, {}]);
  const [starshipInfo, setStarshipInfo] = useState(null);
  const [url, setUrl] = useState("https://swapi.co/api/starships/?format=json");

  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);

  const handleSearchChange = e => {
    const str = e.target.value.trim();
    if (str !== "") {
      setSearch(str);
      setReset(true);
      setUrl(`https://swapi.co/api/starships/?format=json&search=${str}`);
      setReset(false)
    }
    else {
      setSearch(null);
      setUrl("https://swapi.co/api/starships/?format=json")
    }
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (isMounted) {
        setPageData([{}, {}, {}]);
        search ? setLoading(true) : setLoading(false);
        const starships = await axiosCall({
          url
        });
        setPageData(starships.results);
        setStarshipInfo(starships);
        search && setLoading(false);
      }
    })();
    return () => (isMounted = false);
  }, [url, search]);

  return (
    <div>
      <Search handleChange={handleSearchChange} loading={loading} />
      <Popular search={search} name="Starships" hideViewMore>
        <div className="container">
          {pageData.map(
            ({ model, name, cargo_capacity, url, starship_class }, index) => (
              <Starships
                model={model}
                name={name}
                capacity={cargo_capacity}
                key={index}
                url={url}
                starshipClass={starship_class}
              />
            )
          )}
        </div>
        {starshipInfo || reset ? (
          <Paginator
            loading={pageData ? false : true}
            setUrl={setUrl}
            next={starshipInfo && starshipInfo.next}
            prev={starshipInfo && starshipInfo.previous}
            count={starshipInfo && starshipInfo.count}
          />
        ) : (
          ""
        )}
      </Popular>
    </div>
  );
};

export default PopularStarships;
