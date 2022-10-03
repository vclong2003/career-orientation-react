import React from "react";
import styles from "./style.module.css";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default class Home extends React.Component {
  render() {
    return (
      <Container className={styles.container} fluid>
        <Container
          className={`${styles.commonSectionStyle} ${styles.section_1}`}
        >
          <Container>
            <Image
              src={require("../../Assets/Images/img-placeholder.png")}
              fluid
              className={styles.img_1}
            />
          </Container>
          <Container className={styles.infoContainer_1}>
            <div>TEAM</div>
            <div>JESTER</div>
            <div>
              We are a gaming team, owning anyone and anything in our way in the
              field of FPS shooter games. Join us in our way to glory!
            </div>
          </Container>
        </Container>
        <Container
          className={`${styles.commonSectionStyle} ${styles.section_2}`}
        >
          section 2
        </Container>
        <Container
          className={`${styles.commonSectionStyle} ${styles.section_3}`}
        >
          section 3
        </Container>
      </Container>
    );
  }
}
