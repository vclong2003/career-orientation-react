import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Login } from "../../Services/Firebase";
import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loadingVisibility, setloadingVisibility] = useState("hidden");
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
    setloadingVisibility("unset");
    Login(
      email,
      pwd,
      (user) => {
        console.log(user);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
      (msg) => {
        console.log(msg);
        setTimeout(() => {
          setloadingVisibility("hidden");
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
          <Form.Label>Email address</Form.Label>
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
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text>Or, create new account!</Form.Text>
      </Form>
      <Container
        className={styles.loadingLayer}
        fluid
        style={{ visibility: loadingVisibility }}
      >
        <motion.div
          className={styles.box}
          whileInView={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0.8,
          }}
        >
          VCL
        </motion.div>
      </Container>
    </Container>
  );
}
