import "./tvShowDetails.css";
import axiosInstance from "../../axiosConfig/instance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MoviesDetails() {
  const params = useParams();
  const [theTvShow, setTheTvShow] = useState({});
  const style = {
    hero: {
      width: "100%",
      background: `linear-gradient(to left, transparent, #242424),
        url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${theTvShow.backdrop_path})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };
  useEffect(() => {
    axiosInstance
      .get(
        `/tv/${params.id}`
      )
      .then((res) => {
        setTheTvShow(res.data);
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
              src={`https://image.tmdb.org/t/p/w500/${theTvShow.poster_path}`}
              alt={theTvShow.title}
            />
          </div>
          <div className="col m-5 hero__main">
            <p className="my-5">
              <h3 className="text-nowrap">{theTvShow.title} </h3>
              <small> Release date {theTvShow.release_date}</small>
            </p>
            <p className="my-5 w-50">{theTvShow.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
