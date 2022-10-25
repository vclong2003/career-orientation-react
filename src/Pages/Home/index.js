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
          <Image src={require("../../Assets/Images/Homepage/1.png")} fluid />
        </Container>
        {/*Section 2 ---------------------------------------------------------------*/}
        <Container className={styles.section_2} fluid>
          <Image
            src={require("../../Assets/Images/Homepage/2.png")}
            className={styles.img_2}
          />
        </Container>
        {/*Section 3 ---------------------------------------------------------------*/}
        <Container className={styles.section_3} fluid>
          <Image
            src={require("../../Assets/Images/Homepage/3_1.png")}
            className={styles.img_3}
            fluid
          />
        </Container>
      </Container>
    );
  }
}

const handleEmailSubscribe = (email) => {
  alert(email);
};
// alertify.alert(
//   "Development state alert",
//   "Our website is in delevopment, this is just the PLACEHODER. Thanks for your understanding! "
// );
// test write
