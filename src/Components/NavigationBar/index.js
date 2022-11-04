import React from "react";
import styles from "./style.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <Navbar variant="light" expand="lg" sticky="top" className={styles.navBar}>
      <Navbar.Brand
        className={styles.logo}
        onClick={() => {
          navigate("/");
        }}
      >
        VCL
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navColapse}>
        <Nav className="me-auto">
          <Nav.Link
            className={styles.navLink}
            onClick={() => {
              navigate("/mbtitest");
            }}
          >
            Personality Test
          </Nav.Link>
          <Nav.Link
            className={styles.navLink}
            onClick={() => {
              navigate("/review");
            }}
          >
            Review
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("#");
            }}
            className={styles.navLink}
          >
            Workspace
          </Nav.Link>
          <Button className={styles.authBtn}>Login/Register</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
