import { Button, Container, Image, ProgressBar } from "react-bootstrap";
import styles from "./style.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { selection, ruleSet, result } from "../../Data/discData";
import { useNavigate } from "react-router-dom";

export default function DiscTest() {
  const navigate = useNavigate();

  const [selectionIndex, setSelectionIndex] = useState(0);
  const [animationLayerVisibility, setAnimationLayerVisibility] =
    useState("hidden");
  const maxSelectionIndex = selection.length - 1;
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
          opacity: { delay, duration: 0.1 },
        },
      };
    },
  };

  return (
    <Container className={styles.container} fluid>
      <Image
        src={require("../../Assets/Images/DiscTestPage/background.png")}
        className={styles.bgImg}
      />
      <ProgressBar
        animated
        now={(selectionIndex + 1) * 4.17}
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
            {selectionIndex <= maxSelectionIndex
              ? RenderTestItem(
                  selection[selectionIndex],
                  (selectionId, answer) => {
                    const group = FindSelectionGroup(
                      ruleSet,
                      selectionId,
                      answer
                    );

                    result[group]++;

                    if (selectionIndex === maxSelectionIndex) {
                      CalculateResult(result, (result) => {
                        console.log(result);
                        sessionStorage.setItem("discResult", result); //write result to session storage

                        setAnimationLayerVisibility("unset");

                        setTimeout(() => {
                          // window.location.href = "/testresult";
                          navigate("/testresult");
                        }, 3000);
                      });
                    }

                    setSelectionIndex(selectionIndex + 1);
                  }
                )
              : null}
          </Container>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <div
          className={styles.animationLayer}
          style={{ visibility: animationLayerVisibility }}
          key={animationLayerVisibility}
        >
          <motion.svg
            initial="hidden"
            animate="visible"
            width="200px"
            height="200px"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              stroke="white"
              variants={draw}
              custom={0}
              style={{
                fill: "transparent",
                strokeWidth: "10px",
                strokeLinecap: "round",
              }}
            />
            <motion.line
              x1="50"
              y1="110"
              x2="90"
              y2="150"
              stroke="white"
              variants={draw}
              custom={1}
              style={{
                fill: "transparent",
                strokeWidth: "10px",
                strokeLinecap: "round",
              }}
            />
            <motion.line
              x1="160"
              y1="80"
              x2="90"
              y2="150"
              stroke="white"
              variants={draw}
              custom={2}
              style={{
                fill: "transparent",
                strokeWidth: "10px",
                strokeLinecap: "round",
              }}
            />
          </motion.svg>
          <motion.div
            animate={{
              opacity: [0, 1],
              transition: {
                type: "spring",
                bounce: 0.5,
                duration: 2,
              },
            }}
            className={styles.doneText}
          >
            Done!
          </motion.div>
        </div>
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

function FindSelectionGroup(
  rules = [
    {
      group: "D",
      rules: {
        1: "B",
      },
    },
  ],
  selectionId = 0,
  answer = ""
) {
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].rules[selectionId] === answer) {
      return rules[i].group;
    }
  }
}

function CalculateResult(
  rawResult = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
  },
  callback
) {
  let result = "D";
  let maxPoint = 0;

  for (const [key, value] of Object.entries(rawResult)) {
    if (value > maxPoint) {
      maxPoint = value;
      result = key;
    }
  }

  callback(result);
}

// function tempFuntion() {
//   setTimeout(() => {
//     window.location.href = "/testresult";
//   }, 4000);
// }
