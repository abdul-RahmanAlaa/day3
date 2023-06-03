export default function removeFromFav(movie) {
    return {
      type: "REMOVE_FAV",
      payload: movie,
    };
  }
  