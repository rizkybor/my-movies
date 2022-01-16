import { combineReducers } from "redux";
import Movies from "./movies/index";

export default combineReducers({
  movies: Movies,
});
