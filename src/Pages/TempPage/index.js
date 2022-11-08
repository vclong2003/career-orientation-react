import { CloseButton, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import { getDataFromFirestore } from "../../Services/Firebase";

export default function TempPage() {
  return <Container></Container>;
}

function HandleMajorEditing() {
  return (
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
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Col>
          <Col xl={8}>
            <Row>
              {/* RENDER ITEMS HERE */}
              <Col xl={3}>
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
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Col>
          <Col xl={8}>
            <Row>
              {/* RENDER ITEMS HERE */}
              <Col xl={3}>
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
  );
}
