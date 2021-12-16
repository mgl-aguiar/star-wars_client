import { React } from "react";
import CharacterFinder from "../components/CharacterFinder";
import PlanetFinder from "../components/PlanetFinder";

export default function Homepage() {
  return (
    <div>
      <CharacterFinder />
      <PlanetFinder />
    </div>
  );
}
