import {
  GET_DATA_MOVIES,
  GET_DATA_MOVIES_DETAIL,
  GET_DATA_MOVIES_BYNAME,
  GET_DATA_MOVIES_LOADING,
  GET_DATA_MOVIES_ERRORMESSAGE,
} from "./types";

export const setLoadingMovies = () => (dispatch) => {
  let data = true;
  dispatch({ type: GET_DATA_MOVIES_LOADING, payload: data });
};

export const setErrorMovies = () => (dispatch) => {
  let data = "Salah";
  dispatch({ type: GET_DATA_MOVIES_ERRORMESSAGE, payload: data });
};

export const getDataMovies = (e, name) => (dispatch) => {
  const topic = e;
  fetch(
    `https://api.themoviedb.org/3/movie/${topic}?api_key=3fddec7452f7237f0808ee9d379804b0&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((json) => {
      let result = json.results.map((el) => {
        el["poster"] = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
        return el;
      });
      dispatch({ type: GET_DATA_MOVIES, payload: result });
    });
};

export const getMoviesDetail = (id) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=3fddec7452f7237f0808ee9d379804b0&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((json) => {
      let url = { url: `https://image.tmdb.org/t/p/w500${json.poster_path}` };
      let result = {
        ...json,
        ...url,
      };
      dispatch({ type: GET_DATA_MOVIES_DETAIL, payload: result });
    });
};

export const getMoviesByName = (name) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=3fddec7452f7237f0808ee9d379804b0&query=${name}`
  )
    .then((response) => response.json())
    .then((json) => {
      let url = { url: `https://image.tmdb.org/t/p/w500${json.poster_path}` };
      let result = {
        ...json,
        ...url,
      };
      dispatch({ type: GET_DATA_MOVIES_BYNAME, payload: result });
    });
};
