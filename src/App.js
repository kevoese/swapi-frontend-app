import React from "react";
import "./App.css";
// import Search from "./Components/Search";
// import Popular from "./Components/Popular";
// import Starships from "./Components/Starship";
// import Characters from "./Components/Characters";
// import Slide from "./Components/Slide";
// import Planet from "./Components/Planet";
// import StarshipView from "./Pages/StarshipView";
import PopularStarships from "./Pages/PopularStarship";

const App = () => {
  return (
    <div className="App">
      {/* <Search />
      <Popular name="Starships">
        <div className="container">
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
        </div>
      </Popular>

      <Popular name="Planets" hideViewMore>
        <Slide>
        <Planet text='Earth' img='https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg' />
        <Planet text='Earth' img='https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg' />
        <Planet text='Earth' img='https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg' />
        <Planet text='Earth' img='https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg' />
        <Planet text='Earth' img='https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg' />
        <Planet text='Earth' img='https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg' />
        <Planet text='Earth' img='https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg' />
        <Planet text='Earth' img='https://res.cloudinary.com/store-manager/image/upload/v1569418365/planet-1.jpg' />
        </Slide>
      </Popular>

      <Popular name="Characters">
        <div className="container">
          <Characters />
          <Characters />
          <Characters />
          <Characters />
        </div>
      </Popular> */}
         {/* <StarshipView />  */}
        <PopularStarships />
    </div>
  );
}

export default App;
