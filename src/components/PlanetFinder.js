import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanetsByClimate } from "../store/planets/actions";
import { Link } from "react-router-dom";

import { selectPlanetsByClimate } from "../store/planets/selectors";

export default function CharacterFinder() {
  const dispatch = useDispatch();
  const filteredPlanets = useSelector(selectPlanetsByClimate);

  const [climate, setClimate] = useState("");

  const search = (event) => {
    event.preventDefault();
    dispatch(fetchPlanetsByClimate(climate));
  };

  return (
    <div>
      <h1>Planet finder</h1>
      <form onSubmit={search}>
        <label>
          Search for climate type to find planets:
          <input
            type="text"
            value={climate}
            placeholder="example: 'tropical'"
            onChange={(input) => setClimate(input.target.value)}
          ></input>
        </label>
        <input type="submit" value="search" className="button"></input>
      </form>

      {filteredPlanets ? (
        <ul>
          {filteredPlanets.map((eachPlanet) => {
            return (
              <li>
                <Link to="/">{eachPlanet.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
