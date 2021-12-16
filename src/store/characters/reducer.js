const initialState = {
  movieCharacters: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "characters/loadMovieCharacters": {
      return {
        ...state,
        movieCharacters: [...action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
