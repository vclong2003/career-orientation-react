import { Container } from "react-bootstrap";
import styles from "./style.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function RegisterPage() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    repeatPwd: "",
  });

  const handleValueChange = (field, value) => {
    setState({ ...state, [field]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(state);

    fetch("https://635d3190cb6cf98e56af2a5f.mockapi.io/api/v2/users", {
      method: "POST",
      body: JSON.stringify(),
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => {
              handleValueChange("name", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              handleValueChange("email", e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              handleValueChange("password", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password Repeat</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              handleValueChange("repeatPwd", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
