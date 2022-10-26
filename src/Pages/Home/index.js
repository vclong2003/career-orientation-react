import React from "react";
import styles from "./style.module.css";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import alertify from "alertifyjs";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ x: -500 }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
              },
            }}
          >
            <Image
              src={require("../../Assets/Images/Homepage/2.png")}
              className={styles.img_2}
            />
          </motion.div>
        </Container>
        {/*Section 3 ---------------------------------------------------------------*/}
        <Container className={styles.section_3} fluid>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1,
              },
            }}
          >
            <Image
              src={require("../../Assets/Images/Homepage/mbti.png")}
              className={styles.img_3}
              fluid
            />
          </motion.div>
        </Container>
        {/*Section 4 ---------------------------------------------------------------*/}
        <Container className={styles.section_3} fluid>
          <Image
            src={require("../../Assets/Images/Homepage/review.png")}
            className={styles.img_3}
            fluid
          />
        </Container>
        {/*Section 5 ---------------------------------------------------------------*/}
        <Container className={styles.section_3} fluid>
          <Image
            src={require("../../Assets/Images/Homepage/workSpace.png")}
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
