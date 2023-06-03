import "./signIn.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setErrors] = useState({
    nameError: "",
    emailError: "",
    userNameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  // is the better way is to make them singles or one fnc to role them all
  const handleChange = (event) => {
    if (event.target.name === "name") {
      setUser({ ...user, name: event.target.value });
      setErrors({
        ...error,
        nameError: event.target.value.length === 0 ? "Name is required" : "",
      });
    } else if (event.target.name === "email") {
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
    } else if (event.target.name === "userName") {
      setUser({ ...user, userName: event.target.value });
      let pattern = /^\S*$/;
      setErrors({
        ...error,
        userNameError:
          event.target.value.length === 0
            ? "email is required"
            : pattern.test(event.target.value) === false
            ? "please enter a valid username"
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
    } else if (event.target.name === "confirmPassword") {
      setUser({ ...user, confirmPassword: event.target.value });
      setErrors({
        ...error,
        confirmPasswordError:
          event.target.value.length === 0
            ? "you have to confirm the password"
            : event.target.value !== user.password
            ? "confirm password must matches the password"
            : "", 
      });
    }
  };

  const [type1, setType1] = useState("password");
  const [src1, setSrc1] = useState("icons/iconmonstr-eye-10.svg");
  const [type2, setType2] = useState("password");
  const [src2, setSrc2] = useState("icons/iconmonstr-eye-10.svg");

  const togglebutton1 = () => {
    if (type1 === "password" && src1 === "icons/iconmonstr-eye-10.svg") {
      setType1("text");
      setSrc1("icons/iconmonstr-eye-9.svg");
    } else {
      setType1("password");
      setSrc1("icons/iconmonstr-eye-10.svg");
    }
  };
  const togglebutton2 = () => {
    if (type2 === "password" && src2 === "icons/iconmonstr-eye-10.svg") {
      setType2("text");
      setSrc2("icons/iconmonstr-eye-9.svg");
    } else {
      setType2("password");
      setSrc2("icons/iconmonstr-eye-10.svg");
    }
  };

  return (
    <div className="row w-100">
      <div className="col-4"></div>
      <div className="col-4 my-5">
        <h2>Sign In</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={user.name}
              name="name"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <Form.Text className="text-warning">{error.nameError}</Form.Text>
          </Form.Group>
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
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              value={user.userName}
              name="userName"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <Form.Text className="text-warning">
              {error.userNameError}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 toggler__parent">
            <Form.Control
              type={type1}
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <Button variant="light " className="toggler">
              <img
                className="toggler__img"
                src={src1}
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
          <Form.Group className="mb-3 toggler__parent">
            <Form.Control
              type={type2}
              placeholder="Confirm Password"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <Button variant="light " className="toggler">
              <img
                className="toggler__img"
                src={src2}
                alt="show/hide"
                onClick={() => {
                  togglebutton2();
                }}
              />
            </Button>
            <Form.Text className="text-warning">
              {error.confirmPasswordError}
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

export default SignIn;
