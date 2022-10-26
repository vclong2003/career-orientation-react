import React from "react";
import styles from "./style.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";

export default function NavigationBar() {
  return (
    <Navbar variant="light" expand="lg" sticky="top" className={styles.navBar}>
      <Navbar.Brand href="/" className={styles.logo}>
        FINDYOURMAPLE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navColapse}>
        <Nav className="me-auto">
          <NavDropdown
            title="Test"
            id="basic-nav-dropdown"
            className={styles.navLink}
          >
            <NavDropdown.Item href="/mbtitest">MBTI</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" className={styles.navLink}>
            Review
          </Nav.Link>
          <Nav.Link href="#" className={styles.navLink}>
            Workspace
          </Nav.Link>
          <Nav.Link href="#" className={styles.navLink}>
            Mentoring{" "}
            <Badge pill bg="warning" text="dark">
              Premium
            </Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
