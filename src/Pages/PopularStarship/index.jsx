import React, { useState, useEffect } from "react";
import Popular from "../../Components/Popular";
import Starships from "../../Components/Starship";
import Search from "../../Components/Search";
import Paginator from "../../Components/Paginator";
import { axiosCall } from "../../utils";

const PopularStarships = () => {
  const [pageData, setPageData] = useState(null);
  const [starshipInfo, setStarshipInfo] = useState(null);
  const [url, setUrl] = useState("https://swapi.co/api/starships/?format=json");

  const fetchData = async () => {
    setPageData(null);
    const starships = await axiosCall({
      url
    });
    setPageData(starships.results);
    setStarshipInfo(starships);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div>
      <Search />
      <Popular name="Starships" hideViewMore>
        <div className="container">
          {pageData
            ? pageData.map(({ model, name, cargo_capacity }, index) => (
                <Starships
                  model={model}
                  name={name}
                  capacity={cargo_capacity}
                  key={index}
                />
              ))
            : "Loading..."}
        </div>
        {starshipInfo ? (
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
