import {
  GET_DATA_MOVIES,
  GET_DATA_MOVIES_DETAIL,
  GET_DATA_MOVIES_LOADING,
  GET_DATA_MOVIES_BYNAME,
  GET_DATA_MOVIES_ERRORMESSAGE,
} from "../../actions/movies/types";

const initialState = {
  loading: false,
  movies: [],
  moviesByName: [],
  moviesDetail: {},
  errorMessage: "",
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_DATA_MOVIES_BYNAME:
      return {
        ...state,
        moviesByName: action.payload,
      };
    case GET_DATA_MOVIES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_DATA_MOVIES_ERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case GET_DATA_MOVIES_DETAIL:
      return {
        ...state,
        moviesDetail: action.payload,
      };
    default:
      return state;
  }
}
