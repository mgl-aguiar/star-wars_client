import { apiUrl } from "../../constants";
import axios from "axios";

export const charactersFetched = (movieCharacters) => {
  return {
    type: "characters/loadMovieCharacters",
    payload: movieCharacters,
  };
};

export function fetchMovieCharacters(searchTerms, gender) {
  return async (dispatch) => {
    let res;

    if (gender) {
      res = await axios.get(
        `${apiUrl}/characters?search=${searchTerms}&gender=${gender}`
      );
    } else {
      res = await axios.get(`${apiUrl}/characters?search=${searchTerms}`);
    }
    const charactersList = res.data;

    dispatch(charactersFetched(charactersList));
  };
}
