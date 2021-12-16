import { combineReducers } from "redux";
import characters from "./characters/reducer";
import planets from "./planets/reducer";

export default combineReducers({
  characters,
  planets,
});
