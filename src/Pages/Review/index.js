import { Container, Image, Row } from "react-bootstrap";
import styles from "./style.module.css";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);
  return (
    <div
      type="button"
      className={styles.reviewToggleBtn}
      onClick={decoratedOnClick}
    >
      <div>{children}</div>
      <div>
        <i className="bi bi-chevron-down"></i>
      </div>
    </div>
  );
}

export default function ReviewPage() {
  return (
    <Container fluid className={styles.container}>
      <Container className={styles.pageTitle}>School review</Container>
      <Container className={styles.majorContainer}>
        <Row>
          <div className={styles.majorItem}>Human resource</div>
          <div className={styles.majorItem}>Human resource</div>
        </Row>
      </Container>
      <Container className={styles.reviewContainer}>
        <Accordion style={{ width: "100%", backgroundColor: "transparent" }}>
          <Card className={styles.reviewItem}>
            <Card.Header
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <CustomToggle eventKey="0">
                National Economics University
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Image
                  src={require("../../Assets/Images/ReviewPage/neu.jpg")}
                  style={{ width: "100%", borderRadius: "15px" }}
                />
                Et fugiat est labore occaecat amet officia amet. Ea amet duis
                amet cillum ex esse et. Aliquip fugiat eu dolor velit magna
                dolore non labore pariatur. Occaecat excepteur proident
                consequat ipsum laboris nostrud ullamco ad. Aliqua aliqua anim
                cillum est id labore. Labore sint et proident reprehenderit sint
                ea minim sint culpa occaecat ut reprehenderit magna occaecat.
                Reprehenderit ex nostrud adipisicing tempor qui enim nulla
                laborum consectetur veniam ut commodo sit ad.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className={styles.reviewItem}>
            <Card.Header
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <CustomToggle eventKey="1">
                National Economics University
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Image
                  src={require("../../Assets/Images/img-placeholder.png")}
                  style={{ width: "100%", borderRadius: "15px" }}
                />
                Do sunt ullamco cupidatat do proident. Dolor mollit ipsum
                laborum anim Lorem nisi Lorem consectetur. Esse laborum culpa
                laborum cillum enim dolor quis et ipsum sit. Tempor eiusmod et
                ex in. Irure laboris occaecat elit officia aliquip enim fugiat
                laboris consequat qui commodo. Ad laboris aliqua enim deserunt
                laboris. Adipisicing anim labore sint cillum voluptate quis
                pariatur.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className={styles.reviewItem}>
            <Card.Header
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <CustomToggle eventKey="2">
                National Economics University
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Image
                  src={require("../../Assets/Images/img-placeholder.png")}
                  style={{ width: "100%", borderRadius: "15px" }}
                />
                Ad nostrud ipsum velit in quis laboris ad tempor adipisicing
                laboris nostrud ad non sunt. Qui nostrud ex commodo id non et
                aliqua culpa ex laboris amet Lorem do sint. Et Lorem aliqua elit
                nulla reprehenderit labore duis do nulla laborum occaecat
                cupidatat. Consequat ut fugiat sint consequat mollit et minim.
                Ut magna velit deserunt duis magna ex veniam anim.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className={styles.reviewItem}>
            <Card.Header
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <CustomToggle eventKey="3">
                National Economics University
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Ea adipisicing commodo quis mollit mollit est id nostrud.
                Adipisicing aliqua est commodo laborum duis tempor aliquip
                nostrud consequat irure eu ad duis laboris. Est sint fugiat
                veniam enim laboris do ut in nulla deserunt.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </Container>
  );
}
