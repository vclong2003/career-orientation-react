import { Button, Col, Container, Image, Ratio, Row } from "react-bootstrap";
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
          <Col className={styles.right} xl={6} xxl={6}>
            <Container className={styles.suitableMajorsTitle}>
              Suitable Majors
              <Button>
                View school <i className="bi bi-arrow-right-short"></i>
              </Button>
            </Container>
            <Container fluid className={styles.suitableMajorItemContainer}>
              {/* ITEMS GO HERE */}
              <Container className={styles.suitableMajorItem}>
                <Container className={styles.suitableMajorItemName}>
                  Business Management
                </Container>
                <Container>
                  <Row>
                    <Col xxl={4} xl={4} lg={3}>
                      <Ratio aspectRatio="4x3">
                        <Image
                          src={require("../../Assets/userImgPlaceholder.jpg")}
                          className={styles.suitableMajorItemImg}
                        />
                      </Ratio>
                    </Col>
                    <Col xxl={8} xl={8} lg={9}>
                      Dolore commodo veniam consequat ipsum fugiat sunt proident
                      veniam labore ipsum. Sunt aliquip adipisicing proident
                      exercitation occaecat et proident consequat non in. Do
                      adipisicing duis nisi incididunt magna.
                    </Col>
                  </Row>
                </Container>
              </Container>
              <Container className={styles.suitableMajorItem}>
                <Container className={styles.suitableMajorItemName}>
                  Business Management
                </Container>
                <Container>
                  <Row>
                    <Col xxl={4} xl={4} lg={3}>
                      <Ratio aspectRatio="4x3">
                        <Image
                          src={require("../../Assets/userImgPlaceholder.jpg")}
                          className={styles.suitableMajorItemImg}
                        />
                      </Ratio>
                    </Col>
                    <Col xxl={8} xl={8} lg={9}>
                      Dolore commodo veniam consequat ipsum fugiat sunt proident
                      veniam labore ipsum. Sunt aliquip adipisicing proident
                      exercitation occaecat et proident consequat non in. Do
                      adipisicing duis nisi incididunt magna.
                    </Col>
                  </Row>
                </Container>
              </Container>
              <Container className={styles.suitableMajorItem}>
                <Container className={styles.suitableMajorItemName}>
                  Business Management
                </Container>
                <Container>
                  <Row>
                    <Col xxl={4} xl={4} lg={3}>
                      <Ratio aspectRatio="4x3">
                        <Image
                          src={require("../../Assets/userImgPlaceholder.jpg")}
                          className={styles.suitableMajorItemImg}
                        />
                      </Ratio>
                    </Col>
                    <Col xxl={8} xl={8} lg={9}>
                      Dolore commodo veniam consequat ipsum fugiat sunt proident
                      veniam labore ipsum. Sunt aliquip adipisicing proident
                      exercitation occaecat et proident consequat non in. Do
                      adipisicing duis nisi incididunt magna.
                    </Col>
                  </Row>
                </Container>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
