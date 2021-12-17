import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieCharacters } from "../store/characters/actions";
import { selectMovieCharacters } from "../store/characters/selectors";

import "../style/finder.css";

export default function CharacterFinder() {
  const dispatch = useDispatch();
  const movieCharacters = useSelector(selectMovieCharacters);

  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState(null);
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(fetchMovieCharacters(searchTerm, gender, sort));
  }, [searchTerm, gender, sort]);

  return (
    <div className="finder">
      <h1>Character Finder</h1>
      {/* decided to use dropdown menu's to limit the input sent to the api */}
      <form className="form">
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

        <label for="sortBy">Sort by:</label>
        <select
          name="sortBy"
          id="sortBy"
          onChange={(event) => setSort(event.target.value)}
        >
          <option value={null}>...</option>
          <option value={"ageAsc"}>Age: ascending</option>
          <option value={"ageDesc"}>Age: descending</option>
          <option value={"heightAsc"}>Height: ascending</option>
          <option value={"heightDesc"}>Height: descending</option>
        </select>
      </form>

      <div>
        {movieCharacters ? (
          <>
            <h3>Character list:</h3>
            <ul className="list">
              {movieCharacters.map((eachCharacter) => {
                return <li>{eachCharacter.name}</li>;
              })}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
}
