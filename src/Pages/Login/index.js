import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Login } from "../../Services/Firebase";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import LoadingLayer from "../../Components/LoadingLayer";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loadingVisibility, setloadingVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePwdChange = (evt) => {
    setPwd(evt.target.value);
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    setloadingVisibility(true);
    Login(
      email,
      pwd,
      (user) => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
      (msg) => {
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
      <Form onSubmit={handleSubmitForm} className={styles.form}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={handlePwdChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text
          className={styles.regText}
          onClick={() => {
            navigate("/register");
          }}
        >
          Or, create new account!
        </Form.Text>
      </Form>
      <LoadingLayer visibility={loadingVisibility} />
    </Container>
  );
}
