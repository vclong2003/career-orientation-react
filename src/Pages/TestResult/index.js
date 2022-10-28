import { Button, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./style.module.css";
export default function TestResultPage() {
  //get test result from session storage
  let result = { mbti: "", disc: "" };
  if (sessionStorage.getItem("mbtiResult") != null) {
    result.mbti = sessionStorage.getItem("mbtiResult");
  }
  if (sessionStorage.getItem("discResult") != null) {
    result.disc = sessionStorage.getItem("discResult");
  }

  return (
    <Container fluid className={styles.container}>
      <Image
        src={require("../../Assets/Images/TestResult/background.png")}
        className={styles.background}
      />
      <Container className={styles.contentContainer} fluid>
        <Container fluid className={styles.titleContainer}>
          <div className={styles.title}>What kind of maple are you?</div>
        </Container>
        <Row fluid className={styles.resultContainer}>
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
          <Col className={styles.middle} xl={4} xxl={4}>
            <Button className={styles.viewMapleBtn}>View your maple</Button>
          </Col>
          <Col className={styles.right} xl={4} xxl={4}></Col>
        </Row>
      </Container>
    </Container>
  );
}
