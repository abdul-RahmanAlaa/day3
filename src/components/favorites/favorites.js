import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import removeFromFav from "../../store/actions/removeFromFavorites";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const handleRemoveFromFav = (movie) => {
    dispatch(removeFromFav(movie));
  };

  return (
    <>
      <Row className="m-0 px-5">
        {/* <div className="col-3"></div> */}
        <div className="col">
          <Row xs={1} md={4} xl={6} className="my-3 p-x5 w-100 movie__card">
            {favorites.map((movie) => {
              return (
                <Col className="my-2" key={movie.id}>
                  <Card className="bg-secondary">
                    <Button
                      className="fav__button"
                      onClick={() => {
                        handleRemoveFromFav(movie);
                      }}
                    >
                      {favorites.indexOf(movie) === -1 ? (
                        <MdFavoriteBorder />
                      ) : (
                        <MdFavorite />
                      )}
                    </Button>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <Card.Body className="body">
                      <Card.Text className="vote_average">
                        {`${movie.vote_average}%`}
                      </Card.Text>
                      <Link
                        className="movie__card"
                        to={`/moviesDetails/${movie.id}`}
                      >
                        <Card.Title className="text-nowrap">
                          {movie.title}
                        </Card.Title>
                      </Link>
                      <Card.Text>{movie.release_date}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Row>
    </>
  );
}
