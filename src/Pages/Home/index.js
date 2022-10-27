import React, { useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import alertify from "alertifyjs";
import { motion } from "framer-motion";
export default function Home() {
  const [visibility, setVisibility] = useState(false);

  return (
    <Container className={styles.container} fluid>
      {/*Section 1 ---------------------------------------------------------------*/}
      <Container className={styles.section_1} fluid>
        <Image
          src={require("../../Assets/Images/Homepage/1.png")}
          width={"100%"}
        />
      </Container>
      {/*Section 2 ---------------------------------------------------------------*/}
      <Container className={styles.section_2} fluid>
        <motion.div
          initial={{ x: -500 }}
          whileInView={{
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          }}
          className={styles.img_2}
        >
          <Image
            src={require("../../Assets/Images/Homepage/route.png")}
            fluid
          />
        </motion.div>
        <div className={styles.routeDescription}>
          <p>
            Aute dolore in aute irure aute tempor aliquip commodo officia aute
            sint nisi fugiat ullamco. Cupidatat consectetur ea velit ea culpa eu
            dolor. Tempor pariatur ad aliquip ulsbfjdslamco do aliqua.
            Reprehenderit deserunt eu est ut aliquip tempor aliquip pariatur
            veniam consequat qui elit ea. Dolore amet veniam laboris irure magna
            et consequat nulla id elit do consectetur adipisicing. Laborum
            cillum eu reprehenderit eu ad eu nostrud veniam fugiat elit in.
            Veniam deserunt in velit ut cillum enim sunt Lorem enim.
          </p>
          <Button className={styles.startBtn}>Start the journey</Button>
        </div>
      </Container>
      {/*Section 3 ---------------------------------------------------------------*/}
      <Container className={styles.section_3} fluid>
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 1.5,
            },
          }}
          className={styles.img_3}
        >
          <Image src={require("../../Assets/Images/Homepage/mbti.png")} fluid />
        </motion.div>
        <motion.div
          className={styles.personalityTestTile}
          whileInView={{
            scale: [1, 1.1, 1],
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 1,
              repeat: 4,
            },
          }}
          onMouseEnter={() => {
            setVisibility(true);
          }}
          onMouseLeave={() => {
            setVisibility(false);
          }}
          onClick={() => {
            setVisibility(!visibility);
          }}
        >
          Personality Test
        </motion.div>
        <motion.div
          className={styles.personalityTestDesc}
          animate={{
            scale: visibility ? [0, 1] : [1, 0],
            transition: {
              type: "spring",
              bounce: 0.5,
              duration: 0.5,
            },
          }}
        >
          The personality test is the initial element of our website. We will
          use the world's most well-known and reputable personality tests (MBTI,
          DISC, MAPP, etc.) to allow students to freely learn about their
          personalities in different areas of these tests. The unique feature is
          that after finishing all of the exams, the user will obtain the
          combined results of the tests mentioned above.
        </motion.div>
      </Container>
      {/*Section 4 ---------------------------------------------------------------*/}
      <Container className={styles.section_4} fluid>
        <Image
          src={require("../../Assets/Images/Homepage/review.png")}
          width={"100%"}
        />
        <Row className={styles.demoReviewContainer} fluid>
          <Col className={styles.demoReviewCol}>
            <Image
              src={require("../../Assets/Images/Homepage/review_school_name.png")}
              className={styles.reviewSchoolName}
            />
            <motion.div
              initial={{ x: -200 }}
              whileInView={{
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1,
                },
              }}
            >
              <Image
                src={require("../../Assets/Images/Homepage/review_left_reviews.png")}
                className={styles.reviewItem}
              />
            </motion.div>
          </Col>
          <Col className={styles.demoReviewCol}>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.6,
                  duration: 1.5,
                },
              }}
            >
              <Image
                src={require("../../Assets/Images/Homepage/review_right_reviews.png")}
                className={styles.reviewItem}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
      {/*Section 5 ---------------------------------------------------------------*/}
      <Container className={styles.section_5} fluid>
        <Image
          src={require("../../Assets/Images/Homepage/gropuChatBg.png")}
          width={"100%"}
        />
        <Container className={styles.chatItemsContainer} fluid>
          <Row>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 1,
                },
              }}
            >
              <Image
                src={require("../../Assets/Images/Homepage/groupChatDes1.png")}
                width={"50%"}
              />
            </motion.div>
          </Row>
          <Row>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 1,
                },
              }}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <Image
                src={require("../../Assets/Images/Homepage/groupChatDes2.png")}
                width={"35%"}
              />
            </motion.div>
          </Row>
        </Container>
      </Container>
      {/*Section 6 ---------------------------------------------------------------*/}
      <Container className={styles.section_6} fluid>
        <Image
          src={require("../../Assets/Images/Homepage/workSpace.png")}
          width={"100%"}
        ></Image>
        <div className={styles.workspaceDescription}>
          Aute dolore in aute irure aute tempor aliquip commodo officia aute
          sint nisi fugiat ullamco. Cupidatat consectetur ea velit ea culpa eu
          dolor. Tempor pariatur ad aliquip ulsbfjdslamco do aliqua.
          Reprehenderit deserunt eu est ut aliquip tempor aliquip pariatur
          veniam consequat qui elit ea. Dolore amet veniam laboris irure magna
          et consequat nulla id elit do consectetur adipisicing. Laborum cillum
          eu reprehenderit eu ad eu nostrud veniam fugiat elit in. Veniam
          deserunt in velit ut cillum enim sunt Lorem enim.
        </div>
      </Container>
    </Container>
  );
}

// alertify.alert(
//   "Development state alert",
//   "Our website is in delevopment, this is just the PLACEHODER. Thanks for your understanding! "
// );
