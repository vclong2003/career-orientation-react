import { Container } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import RichTextEditor from "../../Components/RichTextEditor";
import styles from "./style.module.css";

export default function DemoPage() {
  return (
    <Container>
      <RichTextEditor
        onChangeCallback={(value) => {
          console.log(value);
        }}
      />
    </Container>
  );
}
