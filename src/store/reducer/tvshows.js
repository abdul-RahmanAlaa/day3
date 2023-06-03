const INTIAL_STATE = {
  tvShows: [],
};

export default function tvShowsReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case "SET_TV_SHOWS":
      return {
        ...state,
        tvShows: action.payload,
      };
    default:
      return state;
  }
}
