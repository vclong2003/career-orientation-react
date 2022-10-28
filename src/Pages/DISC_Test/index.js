import { Container } from "react-bootstrap";
import styles from "./style.module.css";
export default function DiscTest() {
  return (
    <Container className={styles.container}>
      <h1>DISC test</h1>
      <h3 style={{ color: "orange" }}>*This function is in development!</h3>
      {sessionStorage.setItem("discResult", "D")}
      {setTimeout(() => {
        window.location.href = "";
      }, 2000)}
    </Container>
  );
}
