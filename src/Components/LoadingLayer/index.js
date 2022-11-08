import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./style.module.css";

export default function LoadingLayer({ visibility = false }) {
  if (visibility) {
    return (
      <Container className={styles.loadingLayer} fluid>
        <motion.div
          className={styles.box}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0.8,
          }}
        >
          VCL
        </motion.div>
      </Container>
    );
  } else {
    return "";
  }
}
