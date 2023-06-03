import React from "react";
import "../navbar/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const TheNavbar = () => {
  return (
    <>
      <div>
        {/* expand="lg" md */}
        <Navbar bg="secondary" variant="dark">
          <Container>
            <Navbar.Brand className="brand">
              <NavLink className="nav__link" to="/"></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="me-auto">
                <NavLink className="nav__link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav__link" to="/Movies">
                  Movies
                </NavLink>
                <NavLink className="nav__link" to="/tvshows">
                  Tv Shows
                </NavLink>
                <NavLink className="nav__link" to="/aboutus">
                  About Us
                </NavLink>
                <NavLink className="nav__link" to="/favorites">
                  favorites
                </NavLink>
              </Nav>
              <Nav>
                <NavLink className="nav__link" to="/login">
                  login
                </NavLink>
                <NavLink className="nav__link" to="/signin">
                  Sign up
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default TheNavbar;
