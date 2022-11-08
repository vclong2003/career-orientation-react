import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Logout, UserContext, UserProvider } from "../../Services/Firebase";

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <UserProvider>
      <Navbar
        variant="light"
        expand="lg"
        sticky="top"
        className={styles.navBar}
      >
        <Navbar.Brand
          className={styles.logo}
          onClick={() => {
            navigate("/");
          }}
        >
          VCL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.nav}>
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
            <RenderBtn navigator={navigate} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </UserProvider>
  );
}

function RenderBtn({ navigator }) {
  const user = useContext(UserContext);
  return (
    <>
      {user == null ? (
        <Button
          className={styles.authBtn}
          onClick={() => {
            navigator("/login");
          }}
        >
          Login/Register
        </Button>
      ) : (
        <Button
          className={styles.authBtn}
          onClick={() => {
            // navigator("#");
            Logout();
          }}
        >
          {user.displayName ? user.displayName : "Profile"}
        </Button>
      )}
    </>
  );
}
