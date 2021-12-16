const initialState = {
  planetsByClimate: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "planets/loadPlanetsByClimate": {
      return {
        ...state,
        planetsByClimate: [...action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
