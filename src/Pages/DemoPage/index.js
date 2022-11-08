import { useEffect, useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import styles from "./style.module.css";
import { UploadFile } from "../../Services/Firebase";

export default function DemoPage() {
  const [listUser, setListUser] = useState([]);
  const [currentId, setCurrentId] = useState();
  const [imgFile, setImgFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchListUser = () => {
    fetch("https://635d3190cb6cf98e56af2a5f.mockapi.io/api/v2/users", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postImg = (id, url, callback) => {
    fetch(
      `https://635d3190cb6cf98e56af2a5f.mockapi.io/api/v2/users/${id}/img`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.error("Error:", error);
        callback(error);
      });
  };

  useEffect(() => {
    fetchListUser();
  }, []);

  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        <Accordion>
          {listUser.map((value, index) => {
            return (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  {value.name + ` - ID: ${value.id}`}
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {value.img.length == 0
                      ? "No img"
                      : value.img.map((img, _index) => {
                          return (
                            <Image
                              src={img.url}
                              key={_index}
                              style={{
                                width: "25%",
                                objectFit: "cover",
                                marginBottom: "15px",
                                borderRadius: "10%",
                              }}
                            />
                          );
                        })}
                  </Row>
                  <Container>
                    <Button
                      onClick={() => {
                        setCurrentId(value.id);
                        setImgFile(null);
                        handleShow();
                      }}
                    >
                      Add
                    </Button>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add img</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(evt) => {
              setImgFile(evt.target.files[0]);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="primary"
            onClick={() => {
              if (imgFile != null) {
                setLoading(true);
                UploadFile("Demo", imgFile, (url) => {
                  postImg(currentId, url, () => {
                    setLoading(false);
                    fetchListUser();
                    handleClose();
                  });
                });
              }
            }}
          >
            {!loading ? "Add" : <Spinner animation="border" variant="light" />}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
