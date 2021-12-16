import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieCharacters } from "../store/characters/actions";
import { Link } from "react-router-dom";

import { selectMovieCharacters } from "../store/characters/selectors";

export default function CharacterFinder() {
  const dispatch = useDispatch();
  const movieCharacters = useSelector(selectMovieCharacters);

  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState(null);

  useEffect(() => {
    dispatch(fetchMovieCharacters(searchTerm, gender));
  }, [searchTerm, gender]);

  return (
    <div>
      <h1>Character finder</h1>

      <div>
        <label for="filmSelect">Select the movie to find characters</label>
        <select
          name="filmSelect"
          id="filmSelect"
          onChange={(event) => setSearchTerm(event.target.value)}
        >
          <option value={""}>Select...</option>
          <option value={"The Phantom Menace"}>The Phantom Menace</option>
          <option value={"Attack of the Clones"}>Attack of the Clones</option>
          <option value={"Revenge of the Sith"}>Revenge of the Sith</option>
          <option value={"A New Hope"}>A New Hope</option>
          <option value={"The Empire Strikes Back"}>
            The Empire Strikes Back
          </option>
          <option value={"Return of the Jedi"}>Return of the Jedi</option>
          <option value={"The Force Awakens"}>The Force Awakens</option>
        </select>
      </div>

      <div>
        <label for="genderFilter">Filter characters by gender:</label>
        <select
          name="genderFilter"
          id="genderFilter"
          onChange={(event) => setGender(event.target.value)}
        >
          <option value={null}>all</option>
          <option value={"female"}>Female</option>
          <option value={"male"}>Male</option>
        </select>
      </div>

      {movieCharacters ? (
        <ul>
          {movieCharacters.map((eachCharacter) => {
            return (
              <li>
                <Link to="/">{eachCharacter.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
