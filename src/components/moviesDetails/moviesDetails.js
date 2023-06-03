import "./moviesDetails.css";
import axiosInstance from "./../../axiosConfig/instance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MoviesDetails() {
  const params = useParams();
  const [theMovie, setTheMovie] = useState({});
  const style = {
    hero: {
      width: "100%",
      background: `linear-gradient(to left, transparent, #242424),
        url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${theMovie.backdrop_path})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };
  useEffect(() => {
    axiosInstance
      .get(
        `/movie/${params.id}`
      )
      .then((res) => {
        setTheMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div className="m-0 hero row" style={style.hero}>
          <div className="col-3">
            <img
              className="hero__aside"
              src={`https://image.tmdb.org/t/p/w500/${theMovie.poster_path}`}
              alt={theMovie.title}
            />
          </div>
          <div className="col m-5 hero__main">
            <p className="my-5">
              <h3 className="text-nowrap">{theMovie.title} </h3>
              <small> Release date {theMovie.release_date}</small>
            </p>
            <p className="my-5 w-50">{theMovie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
