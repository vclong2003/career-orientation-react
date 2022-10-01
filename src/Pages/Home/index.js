import React from "react";
import styles from "./style.module.css";
import { Container } from "react-bootstrap";
export default class Home extends React.Component {
  render() {
    return (
      <Container className={styles.container} fluid>
        <Container className={`${styles.commonSectionStyle} ${styles.section_1}`}>section 1</Container>
        <Container className={`${styles.commonSectionStyle} ${styles.section_2}`}>section 2</Container>
        <Container className={`${styles.commonSectionStyle} ${styles.section_3}`}>section 3</Container>
      </Container>
    );
  }
}
