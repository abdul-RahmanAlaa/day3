import { combineReducers } from "redux";
import moviesReducer from "./movie";
import tvShowsReducer from "./tvshows";
import favoritesReducer from "./favorites";

const rooteReducer = combineReducers({
  movie: moviesReducer,
  tvShow: tvShowsReducer,
  favorites: favoritesReducer,
});
export default rooteReducer;
