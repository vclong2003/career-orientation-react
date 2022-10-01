import React from "react";
import styles from "./style.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <Container className={styles.container} fluid>
      <Row>
        <Col xs={12} lg={6}>
          <Container>
            <Row className={styles.title}>JESPER</Row>
            <Row>
              <button
                className={styles.socialMediaBtn}
                onClick={() => {
                  handleSocialMediaBtn("twitterLink");
                }}
              >
                <i className="bi bi-twitter" />
              </button>
              <button
                className={styles.socialMediaBtn}
                onClick={() => {
                  handleSocialMediaBtn("facebbokLink");
                }}
              >
                <i className="bi bi-facebook" />
              </button>
              <button
                className={styles.socialMediaBtn}
                onClick={() => {
                  handleSocialMediaBtn("instaLink");
                }}
              >
                <i className="bi bi-instagram" />
              </button>
            </Row>
          </Container>
        </Col>
        <Col xs={12} lg={3}>
          <Container>
            <Row className={styles.title}>CONTACTS</Row>
            <Row>
              info@jesper.com
              <br />
              (917) 365-8863
            </Row>
          </Container>
        </Col>
        <Col xs={12} lg={3}>
          <Container>
            <Row className={styles.title}>P.O. BOX</Row>
            <Row>
              3721 Single Street
              <br />
              Quincy, MA 02169
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
