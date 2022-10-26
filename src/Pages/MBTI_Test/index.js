import { Container, Image } from "react-bootstrap";
import styles from "./style.module.css";

export default function MbtiPage() {
  return (
    <Container fluid className={styles.container}>
      <Image
        src={require("../../Assets/Images/MbtiTestPage/background.png")}
        width={"100%"}
      ></Image>
    </Container>
  );
}
