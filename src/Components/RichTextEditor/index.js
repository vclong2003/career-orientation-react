import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";

export default function RichTextEditor({ onChangeCallback }) {
  const [value, setValue] = useState("");

  //   useEffect(() => {
  //     if (sessionStorage.getItem("para") != null) {
  //       setValue(sessionStorage.getItem("para"));
  //     }
  //     console.log(value);
  //   }, []);

  useEffect(() => {
    onChangeCallback(value);
  }, [onChangeCallback, value]);

  return (
    <Container>
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
    </Container>
  );
}

RichTextEditor.propTypes = {
  onChangeCallback: PropTypes.func,
};
