import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Ratio, Row } from "react-bootstrap";
import { getDataFromFirestore } from "../../Services/Firebase";
import styles from "./style.module.css";
export default function TestResultPage() {
  //get test result from session storage
  let [suitableMajor, setSuitableMajor] = useState([]);
  let result = { mbti: "", disc: "" };
  if (sessionStorage.getItem("mbtiResult") != null) {
    result.mbti = sessionStorage.getItem("mbtiResult");
  }
  if (sessionStorage.getItem("discResult") != null) {
    result.disc = sessionStorage.getItem("discResult");
  }

  useEffect(() => {
    getDataFromFirestore("Majors").then((data) => {
      data.forEach((item) => {
        if (
          item.data.suitableMbti.includes(result.mbti) &&
          item.data.suitableDisc.includes(result.disc)
        ) {
          setSuitableMajor([...suitableMajor, item]);
        }
      });
    });
  }, []);

  return (
    <Container fluid className={styles.container}>
      <Image
        src={require("../../Assets/Images/TestResult/background.png")}
        className={styles.background}
      />
      <Container className={styles.contentContainer} fluid>
        <Container fluid className={styles.titleContainer}>
          <div className={styles.title}>Your test result</div>
        </Container>
        <Row className={styles.resultContainer}>
          <Col className={styles.left} xl={4} xxl={4}>
            <div className={styles.resultCell}>
              MBTI result:
              <br />
              {result.mbti}
            </div>
            <div className={styles.resultCell}>
              DISC result:
              <br />
              {result.disc}
            </div>
          </Col>
          <Col className={styles.right} xl={4} xxl={4}>
            <Container className={styles.suitableMajorsTitle}>
              Suitable Majors
              <Button>
                View school <i className="bi bi-arrow-right-short"></i>
              </Button>
            </Container>
            <Container fluid className={styles.suitableMajorItemContainer}>
              {/* ITEMS GO HERE */}
              {suitableMajor.map((item, index) => {
                return (
                  <Container className={styles.suitableMajorItem} key={index}>
                    {item.data.name}
                  </Container>
                );
              })}
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
