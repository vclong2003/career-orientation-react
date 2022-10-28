import { Button, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./style.module.css";

export default function PremiumPackagePage() {
  return (
    <Container fluid className={styles.container}>
      <Image
        src={require("../../Assets/Images/PremiumPackage/background.png")}
        width="100%"
      />
      <Row className={styles.packageDescriptionContainer}>
        <div className={styles.description}>
          <h4>Awareness Package</h4>
          20% of unknown personality test results and majors and schools reviews
          are included
        </div>
        <div className={styles.description}>
          <h4>Research Package</h4>
          Premium in-game features like speed-ups, promotion opportunities, and
          contests with prizes are included
        </div>
        <div className={styles.description}>
          <h4>Experience Pack</h4>
          Personalized plan with a career counselor is included
        </div>
        <div className={styles.description}>
          <h4>Treasure Pack</h4>a combination package includes all others with a
          more economic payment
        </div>
        <Container className={styles.purchaseBtnContainer}>
          <Button className={styles.purchaseBtn}>Purchase</Button>
        </Container>
      </Row>
    </Container>
  );
}
