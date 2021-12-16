import { apiUrl } from "../../constants";
import axios from "axios";

export const planetsFetched = (planetsByClimate) => {
  return {
    type: "planets/loadPlanetsByClimate",
    payload: planetsByClimate,
  };
};

export function fetchPlanetsByClimate(climateType) {
  return async (dispatch) => {
    const res = await axios.get(`${apiUrl}/planets?search=${climateType}`);
    const planetList = res.data;

    dispatch(planetsFetched(planetList));
  };
}
