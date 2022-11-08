import { Container, Image } from "react-bootstrap";
import styles from "./style.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Register } from "../../Services/Firebase";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoadingLayer from "../../Components/LoadingLayer";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [loadingVisibility, setloadingVisibility] = useState(false);
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
    setloadingVisibility(true);
    Register(
      state.name,
      state.email,
      state.password,
      (user) => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
      (errCode) => {
        setTimeout(() => {
          setloadingVisibility(false);
        }, 1000);
      }
    );
  };

  return (
    <Container className={styles.container} fluid>
      <Image
        src={require("../../Assets/Images/AuthPage/background.png")}
        className={styles.background}
      />
      <Form onSubmit={handleSubmit} className={styles.form}>
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
      <LoadingLayer visibility={loadingVisibility} />
    </Container>
  );
}
