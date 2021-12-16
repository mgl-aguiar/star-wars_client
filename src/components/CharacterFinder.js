import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieCharacters } from "../store/characters/actions";

import { selectMovieCharacters } from "../store/characters/selectors";

export default function CharacterFinder() {
  const dispatch = useDispatch();
  const movieCharacters = useSelector(selectMovieCharacters);

  console.log("character list: ", movieCharacters);

  const [searchTerm, setSearchTerm] = useState("");

  const search = (event) => {
    event.preventDefault();

    dispatch(fetchMovieCharacters(searchTerm));
  };

  return (
    <div>
      <h1>Star Wars character finder</h1>
      <form onSubmit={search}>
        <label>
          Search for a movie to find characters:
          <input
            type="text"
            value={searchTerm}
            placeholder="example: 'new hope'"
            onChange={(input) => setSearchTerm(input.target.value)}
          ></input>
        </label>
        <input type="submit" value="search" className="button"></input>
      </form>

      {movieCharacters !== null ? (
        <ul>
          {movieCharacters.map((eachCharacter) => {
            return <li>{eachCharacter.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}
