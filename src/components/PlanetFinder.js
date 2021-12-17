import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanetsByClimate } from "../store/planets/actions";
import { selectPlanetsByClimate } from "../store/planets/selectors";

import "../style/finder.css";

export default function CharacterFinder() {
  const dispatch = useDispatch();
  const filteredPlanets = useSelector(selectPlanetsByClimate);

  const [climate, setClimate] = useState("");

  const search = (event) => {
    event.preventDefault();
    dispatch(fetchPlanetsByClimate(climate));
  };

  return (
    <div className="finder">
      <h1>Planet Finder</h1>
      <form onSubmit={search} className="form">
        <label>
          Search for climate type to find planets:
          <input
            type="text"
            value={climate}
            placeholder="example: 'temperate'"
            onChange={(input) => setClimate(input.target.value)}
          ></input>
        </label>
        <input type="submit" value="search" className="button"></input>
      </form>

      {filteredPlanets ? (
        <>
          <h3>Planet list:</h3>
          <ul className="list">
            {filteredPlanets.map((eachPlanet) => {
              return <li>{eachPlanet.name}</li>;
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
}
