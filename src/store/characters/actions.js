import { apiUrl } from "../../constants";
import axios from "axios";

export const charactersFetched = (movieCharacters) => {
  return {
    type: "characters/loadMovieCharacters",
    payload: movieCharacters,
  };
};

export function fetchMovieCharacters(searchTerm) {
  return async (dispatch) => {
    const res = await axios.get(`${apiUrl}/characters?search=${searchTerm}`);
    const charactersList = res.data;

    dispatch(charactersFetched(charactersList));
  };
}
