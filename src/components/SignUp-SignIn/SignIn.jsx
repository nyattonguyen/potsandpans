import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handlePassword = () => {};

  return (
    <div className="sign-in__wrapper">
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h1 style={{ marginBottom: 30 }}>Login</h1>

          <span className=" mb-2 text-center">
            Please enter your e-mail and password:
          </span>
        </div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Email"
            style={{ height: 52 }}
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Control
            type="password"
            value={inputPassword}
            style={{ height: 52, marginTop: 20 }}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="w-100 button-custom">LOGIN</Button>

        <div
          className="d-flex justify-content-center"
          style={{ marginTop: 20 }}
        >
          <p>Don't have an account? </p>

          <Link to="/signup" className="link-up" style={{ marginLeft: 4 }}>
            {" "}
            Create one
          </Link>
        </div>
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by TEAM DEV | &copy;2024
      </div>
    </div>
  );
}

export default SignIn;
