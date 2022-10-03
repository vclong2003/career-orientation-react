import React from "react";
import styles from "./style.module.css";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default class Home extends React.Component {
  render() {
    return (
      <Container className={styles.container} fluid>
        <Container className={styles.section_1} fluid>
          <Container>
            <Image
              src={require("../../Assets/Images/pic_1_demo.webp")}
              className={styles.img_1}
            />
          </Container>
          <Container className={styles.infoContainer_1}>
            <div className={styles.title_1}>
              TEAM <br /> <i className={styles.yellowText}>JESPER</i>
            </div>
            <div className={styles.info_1}>
              We are a gaming team, owning anyone and anything in our way in the
              field of FPS shooter games. Join us in our way to glory!
            </div>
            <button className={styles.button_1}>WATCH OUR STREAM</button>
          </Container>
        </Container>
        <Container className={styles.section_2} fluid>
          <Container className={styles.imgContainer_2} fluid>
            <Image
              src={require("../../Assets/Images/pic_2_demo.webp")}
              fluid
              className={styles.img_2}
            />
          </Container>
          <Container className={styles.infoContainer_2}>
            <div className={styles.title_2}>
              NEW LIVE STREAM
              <br />
              EVERY <i className={styles.yellowText}>MONDAY 6PM</i>
            </div>
            <div className={styles.info_2}>
              From challenges to duels, testing out mods, reviewing games or
              bloody matches with other teams - you name it, we stream it.
            </div>
            <button className={styles.button_2}>PREVIOUS MATCHES</button>
          </Container>
        </Container>
        <Container className={styles.section_3} fluid>
          <Container className={styles.imgContainer_2} fluid>
            <Image
              src={require("../../Assets/Images/pic_2_demo.webp")}
              fluid
              className={styles.img_2}
            />
          </Container>
          <Container className={styles.infoContainer_2}>
            <div className={styles.title_2}>
              NEW LIVE STREAM
              <br />
              EVERY <i className={styles.yellowText}>MONDAY 6PM</i>
            </div>
            <div className={styles.info_2}>
              From challenges to duels, testing out mods, reviewing games or
              bloody matches with other teams - you name it, we stream it.
            </div>
            <button className={styles.button_2}>PREVIOUS MATCHES</button>
          </Container>
        </Container>
        <Container className={styles.section_4}>section 4</Container>
      </Container>
    );
  }
}
