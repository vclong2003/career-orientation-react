import React from "react";
import styles from "./style.module.css";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import alertify from "alertifyjs";
export default class Home extends React.Component {
  render() {
    return (
      <Container className={styles.container} fluid>
        {/*Section 1 ---------------------------------------------------------------*/}
        <Container className={styles.section_1} fluid>
          <Container className={styles.imgContainer_1} fluid>
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
            <Button className={styles.button_1}>WATCH OUR STREAM</Button>
          </Container>
        </Container>
        {/*Section 2 ---------------------------------------------------------------*/}
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
            <Button className={styles.button_2}>PREVIOUS MATCHES</Button>
          </Container>
        </Container>
        {/*Section 3 ---------------------------------------------------------------*/}
        <Container className={styles.section_3} fluid>
          <Container className={styles.imgContainer_3} fluid>
            <Image
              src={require("../../Assets/Images/pic_3_demo.webp")}
              fluid
              className={styles.img_3}
            />
          </Container>
          <Container className={styles.infoContainer_3}>
            <div className={styles.title_3}>
              IN LOVE
              <br />
              <i className={styles.yellowText}>WITH GAMING</i>
            </div>
            <div className={styles.info_3}>
              All of the best stories begin in the basement, and Team Jesper is
              one of those.
            </div>
            <Button className={styles.button_3}>GET TO KNOW US</Button>
          </Container>
        </Container>
        {/*Section 4 ---------------------------------------------------------------*/}
        <Container className={styles.section_4} fluid>
          <Container className={styles.imgContainer_4} fluid>
            <Image
              src={require("../../Assets/Images/pic_4_demo.webp")}
              className={styles.img_4}
            />
          </Container>
          <Container className={styles.infoContainer_4}>
            <div className={styles.title_4}>
              <i className={styles.yellowText}>“</i>
              ONLY THE DEAD HAVE SEEN THE END OF WAR.
              <i className={styles.yellowText}>”</i>
            </div>
            <div className={styles.info_4}>SUBSCRIBE TO OUR NEWSLETTER</div>
            <Form className={styles.subscribe_form}>
              <Form.Label className={styles.subscribe_form_label}>
                Email address
              </Form.Label>
              <Form.Control
                className={styles.subscribe_form_input}
                type="email"
                placeholder="Your email address"
                id="emailInput"
              />
              <Form.Text className="text-muted">
                This field is required
              </Form.Text>
              <Button
                className={styles.button_4}
                onClick={() => {
                  handleEmailSubscribe(
                    document.querySelector("#emailInput").value
                  );
                }}
              >
                SUBMIT
              </Button>
            </Form>
          </Container>
        </Container>
      </Container>
    );
  }
}

const handleEmailSubscribe = (email) => {
  alert(email);
};
alertify.alert(
  "Development state alert",
  "Our website is in delevopment, this is just the PLACEHODER. Thanks for your understanding! "
);
