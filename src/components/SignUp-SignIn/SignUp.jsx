import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

function SignUp() {
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
          <h1 style={{ marginBottom: 30 }}>REGISTER</h1>

          <span className=" mb-2 text-center">
            Please fill in the information below:
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
        <Form.Group className="mb-2" controlId="firstname">
          <Form.Control
            type="text"
            placeholder="First name"
            style={{ height: 52 }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="lastname">
          <Form.Control
            type="text"
            placeholder="Last name"
            style={{ height: 52 }}
            required
          />
        </Form.Group>
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
        <Button className="w-100 button-custom">CREATE MY ACCOUNT</Button>
      </Form>
    </div>
  );
}

export default SignUp;
