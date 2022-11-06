import { Button, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./style.module.css";

function MyComponent() {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("para") != null) {
      setValue(sessionStorage.getItem("para"));
    }
    console.log(value);
  }, []);

  return (
    <Container>
      <Button
        onClick={() => {
          sessionStorage.setItem("para", value);
          setValue(value);
        }}
      >
        Test
      </Button>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
        ]}
      />
      <Container
        dangerouslySetInnerHTML={{ __html: value }}
        className={styles.para}
      ></Container>
    </Container>
  );
}

export default function DemoPage() {
  return (
    <Container>
      <MyComponent />
    </Container>
  );
}
