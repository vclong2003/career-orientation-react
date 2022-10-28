import { Button, Container, Image, ProgressBar } from "react-bootstrap";
import styles from "./style.module.css";
import { points, question, testPoint } from "../../Data/mbtiData";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MbtiPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [animationLayerVisibility, setAnimationLayerVisibility] =
    useState("hidden");

  const maxQuestionIndex = question.length - 1;

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
    <Container fluid className={styles.container}>
      <Image
        src={require("../../Assets/Images/MbtiTestPage/background.png")}
        width={"100%"}
        className={styles.background}
      ></Image>
      <ProgressBar
        animated
        now={`${(questionIndex + 1) * 2}`}
        className={styles.progressBar}
        variant="info"
      />
      <AnimatePresence>
        <motion.div
          key={questionIndex}
          className={styles.contentContainer}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          {questionIndex <= maxQuestionIndex
            ? renderQuestions(
                question[questionIndex],
                points,
                (group, point) => {
                  testPoint[group] += point;
                  // console.log(questionIndex);
                  // console.log(testPoint);
                  if (questionIndex === maxQuestionIndex) {
                    calculateResult(testPoint, (result) => {
                      console.log(result);
                      //save data to session
                      setAnimationLayerVisibility("unset");
                      setTimeout(() => {
                        window.location.href = "/disctest";
                      }, 3000);
                    });
                  }
                  setQuestionIndex(questionIndex + 1);
                }
              )
            : null}
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
    <>
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
    </>
  );
}
function calculateResult(
  rawPoints = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
  callBack
) {
  let result = "";

  if (rawPoints.E > rawPoints.I) {
    result += "E";
  } else {
    result += "I";
  }
  if (rawPoints.S > rawPoints.N) {
    result += "S";
  } else {
    result += "N";
  }
  if (rawPoints.T > rawPoints.F) {
    result += "T";
  } else {
    result += "F";
  }
  if (rawPoints.J > rawPoints.P) {
    result += "J";
  } else {
    result += "P";
  }

  callBack(result);
}
