const INTIAL_STATE = {
  favorites: [],
};

export default function favoritesReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case "REMOVE_FAV":
      let target = state.favorites.indexOf(action.payload);
      state.favorites.splice(target, 1);
      return {
        ...state,
        favorites: [...state.favorites],
      };
    default:
      return state;
  }
}
