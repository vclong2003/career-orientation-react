import {
  CloseButton,
  Col,
  Container,
  Image,
  Ratio,
  Row,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { getDataFromFirestore } from "../../../Services/Firebase";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function MajorEditor() {
  const [listData, setListData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {};

  useEffect(() => {
    getDataFromFirestore("Majors").then((result) => {
      setListData(result);
    });
  }, []);

  return (
    <>
      <Container>
        <Accordion>
          {listData.map((item, index) => {
            return (
              <Accordion.Item eventKey="index" key={index}>
                <Accordion.Header>{item.data.name}</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col xxl={4}>
                      <Ratio aspectRatio="4x3">
                        <Image src={item.data.imageUrl} />
                      </Ratio>
                    </Col>
                    <Col xxl={8}>{item.data.description}</Col>
                  </Row>
                  <Container>
                    <Button
                      onClick={() => {
                        setCurrentId(item.id);
                        handleShow();
                      }}
                    >
                      Edit
                    </Button>
                    <Button>Delete</Button>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            {/* 3rd GROUP */}
            <Form.Group className="mb-3">
              <Row>
                <Col xl={4}>
                  <Form.Control type="text" />
                  <Dropdown.Menu show>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Col>
                <Col xl={8}>
                  <Row>
                    {/* RENDER ITEMS HERE */}
                    <Col xl={5}>
                      <Card>
                        <Card.Body
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          TEST
                          <CloseButton />
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form.Group>
            {/* 4rd GROUP */}
            <Form.Group className="mb-3">
              <Row>
                <Col xl={4}>
                  <Form.Control type="text" />
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Col>
                <Col xl={8}>
                  <Row>
                    {/* RENDER ITEMS HERE */}
                    <Col xl={5}>
                      <Card>
                        <Card.Body
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          TEST
                          <CloseButton />
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Calcel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
