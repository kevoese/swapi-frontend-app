import React, { useState, useEffect } from "react";
import Popular from "../../Components/Popular";
import Characters from "../../Components/Characters";
import Search from "../../Components/Search";
import Paginator from "../../Components/Paginator";
import "./PopularCharacters.scss";

const PopularCharacters = () => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    console.log({ pageData });
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
          <Characters />
          <Characters />
          <Characters />
          <Characters />
        </div>
        <Paginator
          setPageData={setPageData}
          content={[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26
          ]}
        />
      </Popular>
    </div>
  );
};

export default PopularCharacters;
