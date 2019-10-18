import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import StarshipView from "./Pages/StarshipView";
import PopularStarships from "./Pages/PopularStarship";
import PopularCharacters from "./Pages/PopularCharacters";
import Home from "./Pages/Home";
import CharacterView from "./Pages/CharacterView";
import PlanetView from "./Pages/PlanetView";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/starship/:id" component={StarshipView} />
        <Route path="/character/:id" component={CharacterView} />
        <Route path="/planet/:id" component={PlanetView} />
        <Route path="/popular-starships" component={PopularStarships} />
        <Route path="/popular-characters" component={PopularCharacters} />
      </Router>
    </div>
  );
};

export default App;
