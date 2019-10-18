import axios from "axios";
import starship1 from "../assets/starship-1.jpg";
import starship2 from "../assets/starship-2.jpg";
import starship3 from "../assets/starship-3.jpg";
import starship4 from "../assets/starship-4.jpg";
import starship5 from "../assets/starship-5.jpg";
import starship6 from "../assets/starship-5.jpg";
import characterMale from "../assets/character-1.jpg";
import characterOther from "../assets/character-3.jpg";
import characterFemale from "../assets/character-4.jpg";
import planet1 from "../assets/planet-1.jpg";
import planet2 from "../assets/planet-2.jpg";
import planet3 from "../assets/planet-3.jpg";

export const axiosCall = async ({ url, data, method }) => {
  const result = await axios({
    url,
    method: method || "GET",
    data,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    }
  });
  return result.data;
};

export const getImg = starshipClass => {
  const starshipImgs = {
    fighter: starship1,
    craft: starship2,
    cruiser: starship3,
    transport: starship4,
    escort: starship5
  };
  if (!starshipClass) return starship6;
  let str = starshipClass.toLowerCase();
  const imgRes =
    (str.includes("fighter") && starshipImgs["fighter"]) ||
    (str.includes("craft") && starshipImgs["craft"]) ||
    (str.includes("cruiser") && starshipImgs["cruiser"]) ||
    (str.includes("transport") && starshipImgs["transport"]) ||
    (str.includes("escort") && starshipImgs["escort"]) ||
    starship6;
  return imgRes;
};

export const getPlanetImg = climate => {
  const str = climate && climate.toLowerCase().split(',')[0].trim();
  switch (str) {
    case "temperate":
      return planet3;
    case "frozen":
      return planet1;
    default:
      return planet2;
  }
};

export const charactersImg = gender => {
  switch (gender) {
    case "male":
      return characterMale;
    case "female":
      return characterFemale;
    default:
      return characterOther;
  }
};

