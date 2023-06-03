export default function addToFav(movie) {
    return {
      type: "ADD_FAV",
      payload: movie,
    };
  }
  