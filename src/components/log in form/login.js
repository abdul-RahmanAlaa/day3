import "./logIn.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

const LogIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setUser({ ...user, email: event.target.value });
      let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      setErrors({
        ...error,
        emailError:
          event.target.value.length === 0
            ? "email is required"
            : pattern.test(event.target.value) === false
            ? "please enter a valid email"
            : "",
      });
    } else if (event.target.name === "password") {
      setUser({ ...user, password: event.target.value });
      let pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*\d]{8,}$/;
      setErrors({
        ...error,
        passwordError:
          event.target.value.length === 0
            ? "password is required"
            : event.target.value.length < 8
            ? "password must be more than 8 characters"
            : pattern.test(event.target.value) === false
            ? "password must have a lowercase,uppercase and special characters"
            : "",
      });
    }
  };

  const [type, setType] = useState("password");
  const [src, setSrc] = useState("icons/iconmonstr-eye-10.svg");

  const togglebutton1 = () => {
    if (type === "password" && src === "icons/iconmonstr-eye-10.svg") {
      setType("text");
      setSrc("icons/iconmonstr-eye-9.svg");
    } else {
      setType("password");
      setSrc("icons/iconmonstr-eye-10.svg");
    }
  };

  return (
    <div className="row w-100">
      <div className="col-4"></div>
      <div className="col-4 my-5">
        <h2>LogIn</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={user.email}
              name="email"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <Form.Text className="text-warning ">{error.emailError}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 login--toggler__parent">
            <Form.Control
              type={type}
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <Button variant="light " className="login--toggler">
              <img
                className="login--toggler__img"
                src={src}
                alt="show/hide"
                onClick={() => {
                  togglebutton1();
                }}
              />
            </Button>
            <Form.Text className="text-warning">
              {error.passwordError}
            </Form.Text>
          </Form.Group>

          <Button variant="secondary" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;
