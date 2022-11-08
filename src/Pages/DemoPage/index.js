import { useEffect, useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

import styles from "./style.module.css";

export default function DemoPage() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
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
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        {console.log(listUser)}
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
                                marginBottom: "15px",
                                borderRadius: "10%",
                              }}
                            />
                          );
                        })}
                  </Row>
                  <Container>
                    <Button onClick={handleShow}>Add</Button>
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
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
