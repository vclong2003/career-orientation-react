import { Button, Container, Image } from "react-bootstrap";
import styles from "./style.module.css";
import { points, question, testPoint } from "../../Data/mbtiData";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MbtiPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  return (
    <Container fluid className={styles.container}>
      <Image
        src={require("../../Assets/Images/MbtiTestPage/background.png")}
        width={"100%"}
      ></Image>
      <Container className={styles.contentContainer}>
        {/* <Container className={styles.question}>
          IN YOUR DAILY WORK, DO YOU
        </Container>
        <Button className={styles.answerBtn}>
          USUALLY PLAN YOUR WORK SO YOU WON’T NEED TO WORK UNDER PRESSURE
        </Button>
        <Button className={styles.answerBtn}>
          RATHER ENJOY AN EMERGENCY THAT MAKES YOU WORK AGAINST TIME
        </Button>
        <Button className={styles.answerBtn}>
          HATE TO WORK UNDER PRESSURE?
        </Button> */}
        {renderQuestions(question[questionIndex], points, (text, point) => {
          console.log(text + " " + point);
          setQuestionIndex(questionIndex + 1);
        })}
      </Container>
    </Container>
  );
}

function renderQuestions(
  question = {
    questionId: 0,
    content: "",
    A: "",
    B: "",
  },
  pointingRules = [
    {
      group: "E",
      ruleset: [
        {
          questionId: 3,
          selection: "A",
          point: 2,
        },
      ],
    },
  ],
  selectedCallback
) {
  const id = question.questionId;
  const tempPoints = {
    A: { group: "", point: 0 },
    B: { group: "", point: 0 },
    C: { group: "", point: 0 },
  };

  for (let i = 0; i < pointingRules.length; i++) {
    for (let j = 0; j < pointingRules[i].ruleset.length; j++) {
      if (pointingRules[i].ruleset[j].questionId === question.questionId) {
        if (pointingRules[i].ruleset[j].selection === "A") {
          tempPoints.A = {
            group: pointingRules[i].group,
            point: pointingRules[i].ruleset[j].point,
          };
        } else if (pointingRules[i].ruleset[j].selection === "B") {
          tempPoints.B = {
            group: pointingRules[i].group,
            point: pointingRules[i].ruleset[j].point,
          };
        } else if (pointingRules[i].ruleset[j].selection === "C") {
          tempPoints.C = {
            group: pointingRules[i].group,
            point: pointingRules[i].ruleset[j].point,
          };
        }
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        key={question.questionId}
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
      >
        <Container className={styles.question}>{question.content}</Container>
        <Button
          className={styles.answerBtn}
          onClick={() => {
            selectedCallback(tempPoints.A.group, tempPoints.A.point);
          }}
        >
          {question.A}
        </Button>
        <Button
          className={styles.answerBtn}
          onClick={() => {
            selectedCallback(tempPoints.B.group, tempPoints.B.point);
          }}
        >
          {question.B}
        </Button>
        {question.C ? (
          <Button
            className={styles.answerBtn}
            onClick={() => {
              selectedCallback(tempPoints.C.group, tempPoints.C.point);
            }}
          >
            {question.C}
          </Button>
        ) : (
          ""
        )}
      </motion.div>
    </AnimatePresence>
  );
}
