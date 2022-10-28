import { Container } from "react-bootstrap";
import styles from "./style.module.css";
export default function DiscTest() {
  return (
    <Container className={styles.container}>
      <h1>DISC test</h1>
      <h4 style={{ color: "orange" }}>
        *This function is in development! (test result: D)
      </h4>
      {sessionStorage.setItem("discResult", "D")}
      {tempFuntion()}
    </Container>
  );
}
function tempFuntion() {
  setTimeout(() => {
    window.location.href = "/testresult";
  }, 4000);
}
