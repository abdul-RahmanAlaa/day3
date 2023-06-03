import "./tvShows.css";
import React, { useEffect, useState } from "react";
import axiosInstance from "./../../axiosConfig/instance";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function TvShows() {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axiosInstance
      .get(`/tv/popular?page=${page}`)

      .then((res) => {
        setTvShows(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <>
      <Row className="m-0 px-5">
        {/* <div className="col-3"></div> */}
        <div className="col">
          <Row xs={1} md={4} xl={6} className="my-5 w-100 movie__card">
            {tvShows.map((tvShow) => {
              return (
                <Col className="my-2" key={tvShow.id}>
                  <Link
                    className="tvShow__card"
                    to={`/TvShowDetails/${tvShow.id}`}
                  >
                    <Card className="bg-secondary">
                      <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                      />
                      <Card.Body className="body">
                        <Card.Text className="vote_average">
                          {`${tvShow.vote_average}%`}
                        </Card.Text>
                        <Card.Title className="text-nowrap">
                          {tvShow.name}
                        </Card.Title>
                        <Card.Text>{tvShow.first_air_date}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
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
