import "./movies.css";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig/instance";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import changeMovies from "../../store/actions/movie";
import addToFav from "../../store/actions/addToFavorites";
import removeFromFav from "../../store/actions/removeFromFavorites";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function Movies() {
  // const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const movies = useSelector((state) => state.movie.movies);
  const favorites = useSelector((state) => state.favorites.favorites);

  // useEffect(() => {
  //   axiosInstance
  //     .get(`/movie/popular?page=${page}`)
  //     .then((res) => {
  //       setMovies(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [page]);

  const dispatch = useDispatch();

  console.log(movies);

  useEffect(() => {
    dispatch(changeMovies(`/movie/popular?page=${page}`));
  }, [page]);
  //why it is gavein a warning here -_-

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "" || e.target.value === null) {
      dispatch(changeMovies(`/movie/popular?page=${page}`));
    } else {
      dispatch(changeMovies(`/search/movie?query=${e.target.value}`));
    }
  };

  useEffect(() => {}, [favorites]);

  const handleAddToFav = (movie) => {
    dispatch(addToFav(movie));
  };
  // const handleRemoveFromFav = (movie) => {
  //   dispatch(removeFromFav(movie));
  // };
  // const handelFave = (event) => {};

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(event) => {
                  handleSearch(event);
                }}
              />
            </Form>
          </Col>
        </Row>
      </Container>
      <Row className="m-0 px-5">
        {/* <div className="col-3"></div> */}
        <div className="col">
          <Row xs={1} md={4} xl={6} className="my-3 p-x5 w-100 movie__card">
            {movies.map((movie) => {
              return (
                <Col className="my-2" key={movie.id}>
                  <Card className="bg-secondary">
                    <Button
                      className="fav__button"
                      onClick={() => {
                        handleAddToFav(movie);
                      }}
                    >
                      {!favorites.find((mov) => {
                        return mov.id == movie.id;
                      }) ? (
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
      <Row className="m-0">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            className={`${page === 1 ? "disabled" : ""}`}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            &laquo; Previous
          </Button>
          <Button disabled variant="secondary">
            Page Number {page}
          </Button>
          <Button
            variant="secondary"
            className={`${page === 500 ? "disabled" : ""}`}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next &raquo;
          </Button>
        </ButtonGroup>
      </Row>
    </>
  );
}
