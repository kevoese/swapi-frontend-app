import React, { useState, useEffect } from "react";
import Popular from "../../Components/Popular";
import Starships from "../../Components/Starship";
import Search from "../../Components/Search";
import Paginator from "../../Components/Paginator";

const PopularStarships = () => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    console.log({pageData})
  }, [pageData])

  return (
    <div>
      <Search />
      <Popular name="Starships" hideViewMore>
        <div className="container">
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
        </div>
        <Paginator setPageData={setPageData} content={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]} />
      </Popular>
    </div>
  );
};

export default PopularStarships;
