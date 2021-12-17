import { apiUrl } from "../../constants";
import axios from "axios";

export const charactersFetched = (movieCharacters) => {
  return {
    type: "characters/loadMovieCharacters",
    payload: movieCharacters,
  };
};

export function fetchMovieCharacters(search, gender, sort) {
  return async (dispatch) => {
    // had some help figuring out this logic to define the sorting method,
    // since both sortByAge and SortByHeight shouldn't be queried at the same time.
    // probably changing the backend a bit would have made it simpler.
    const isSortByAge = sort.includes("age") ? sort : undefined;
    const sortByAge =
      isSortByAge && (isSortByAge.includes("Asc") ? "asc" : "desc");

    const isSortByHeight = sort.includes("height") ? sort : undefined;
    const sortByHeight =
      isSortByHeight && (isSortByHeight.includes("Asc") ? "asc" : "desc");

    const res = await axios.get(`${apiUrl}/characters`, {
      params: { search, gender, sortByAge, sortByHeight },
    });

    const charactersList = res.data;

    dispatch(charactersFetched(charactersList));
  };
}
