import { Button, Container, Image, ProgressBar } from "react-bootstrap";
import styles from "./style.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { selection, ruleSet, result } from "../../Data/discData";

export default function DiscTest() {
  const [selectionIndex, setSelectionIndex] = useState(0);

  return (
    <Container className={styles.container} fluid>
      <Image
        src={require("../../Assets/Images/DiscTestPage/background.png")}
        className={styles.bgImg}
      />
      <ProgressBar
        animated
        now={50}
        className={styles.progressBar}
        variant="info"
      />
      <AnimatePresence>
        <motion.div
          className={styles.testContainer}
          key={selectionIndex}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <Container className={styles.question}>
            Select the word that most describes you
          </Container>
          <Container fluid className={styles.answersContainer}>
            {RenderTestItem(
              selection[selectionIndex],
              (selectionId, answer) => {
                console.log(selectionId + " " + answer);
                setSelectionIndex(selectionIndex + 1);
              }
            )}
          </Container>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

function RenderTestItem(
  selection = {
    id: 0,
    selection: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
  },
  callback
) {
  return (
    <>
      <Button
        className={styles.answerItem}
        onClick={() => {
          callback(selection.id, "A");
        }}
      >
        {selection.selection.A}
      </Button>
      <Button
        className={styles.answerItem}
        onClick={() => {
          callback(selection.id, "B");
        }}
      >
        {selection.selection.B}
      </Button>
      <Button
        className={styles.answerItem}
        onClick={() => {
          callback(selection.id, "C");
        }}
      >
        {selection.selection.C}
      </Button>
      <Button
        className={styles.answerItem}
        onClick={() => {
          callback(selection.id, "D");
        }}
      >
        {selection.selection.D}
      </Button>
    </>
  );
}

// function tempFuntion() {
//   setTimeout(() => {
//     window.location.href = "/testresult";
//   }, 4000);
// }
