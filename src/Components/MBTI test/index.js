import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { points, question } from "./data";
import { useState } from "react";

export default function MbtiTest() {
  const [isTesting, setTestingState] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);

  let pointResult = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  const addPoint = (questionId = 0, selection = "A") => {
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].ruleset.length; j++) {
        if (
          points[i].ruleset[j].questionId === questionId &&
          points[i].ruleset[j].selection === selection
        ) {
          const point = points[i].ruleset[j].point;
          console.log(point);
          pointResult[points[i].group] =
            pointResult[points[i].group] + point;
        }
      }
    }
  };

  const LoadQuestionModal = () => {
    return (
      <Container className={styles.formContainer}>
        <Row>
          {question[questionIndex].questionId +
            ". " +
            question[questionIndex].content}
        </Row>
        <Row>
          <Button
            className={styles.answerBtn}
            onClick={() => {
              addPoint(question[questionIndex].questionId, "A");
              setQuestionIndex(questionIndex + 1);
            }}
          >
            {question[questionIndex].A}
          </Button>
          <Button
            className={styles.answerBtn}
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
            }}
          >
            {question[questionIndex].B}
          </Button>
        </Row>
      </Container>
    );
  };

  const LoadResult = () => {
    return <Container>{console.log(pointResult)}</Container>;
  };

  while (isTesting) {
    if (questionIndex >= question.length) {
      setTestingState(false);
    }
    return <LoadQuestionModal />;
  }
  return <LoadResult />;
}
