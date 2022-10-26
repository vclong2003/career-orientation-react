import React from "react";
import styles from "./style.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Footer() {
  return (
    <Container className={styles.container} fluid>
      <Row>
        <Col xs={12} lg={6} className={styles.itemContainer}>
          <Container>
            <Row className={styles.title}>THE RIZE</Row>
            <Row>
              <Button
                className={styles.socialMediaBtn}
                onClick={() => {
                  handleSocialMediaBtn("twitterLink");
                }}
              >
                <i className="bi bi-twitter" />
              </Button>
              <Button
                className={styles.socialMediaBtn}
                onClick={() => {
                  handleSocialMediaBtn("facebbokLink");
                }}
              >
                <i className="bi bi-facebook" />
              </Button>
              <Button
                className={styles.socialMediaBtn}
                onClick={() => {
                  handleSocialMediaBtn("instaLink");
                }}
              >
                <i className="bi bi-instagram" />
              </Button>
            </Row>
          </Container>
        </Col>
        <Col xs={12} lg={3} className={styles.itemContainer}>
          <Container>
            <Row className={styles.title}>CONTACTS</Row>
            <Row>
              Dev: Vu Cong Long
              <br />
              vclong2003@gmail.com
              <br />
              0888827768
            </Row>
          </Container>
        </Col>
        <Col xs={12} lg={3} className={styles.itemContainer}>
          <Container>
            <Row className={styles.title}>HEADQUARTER</Row>
            <Row>
              2 Dương Khuê, Mai Dịch
              <br />
              Cầu Giấy, Hà Nội
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

const handleSocialMediaBtn = (url) => {
  alert(url + " clicked!");
};
