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
import { resultDescription as mbtiResDescriptions } from "../../../Data/mbtiData";
import { resultDescription as discResDescriptions } from "../../../Data/discData";

export default function MajorEditor() {
  const [listData, setListData] = useState([]);
  const [dataSchema, setDataSchema] = useState({
    description: "",
    imageUrl: "",
    name: "",
    suitableDisc: [],
    suitableMbti: [],
  });
  const [mbtiOptions, setMbtiOptions] = useState([]);
  const [selectedMbtiOptions, setSelectedMbtiOptions] = useState([]);
  const [discOptions, setDiscOptions] = useState([]);
  const [selectedDiscOption, setSelectedDiscOption] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    getDataFromFirestore("Majors").then((result) => {
      setListData(result);
    });

    const tempArr = [];
    mbtiResDescriptions.forEach((item) => {
      tempArr.push(item.type);
    });
    setMbtiOptions(tempArr);

    const _tempArr = [];
    for (const [key, value] of Object.entries(discResDescriptions)) {
      _tempArr.push(key);
    }
    setDiscOptions(_tempArr);
  }, []);

  const handleSubmit = () => {};

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
                        setShowModal(true);
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
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
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
              <PersonalityTypesEditor
                selections={mbtiOptions}
                selected={selectedMbtiOptions}
                callback={(data) => {
                  setSelectedMbtiOptions(data);
                }}
              />
            </Form.Group>
            {/* 4rd GROUP */}
            <Form.Group className="mb-3">
              <PersonalityTypesEditor
                selections={discOptions}
                selected={selectedDiscOption}
                callback={(data) => {
                  setSelectedDiscOption(data);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Calcel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function PersonalityTypesEditor({ selections = [], selected = [], callback }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selecting, setSelecting] = useState(selected);

  useEffect(() => {
    callback(selecting);
  }, [selecting, callback]);

  return (
    <Row>
      <Col xl={4}>
        <Form.Control
          type="text"
          onFocus={() => {
            setShowDropdown(true);
          }}
        />
        <Dropdown.Menu show={showDropdown}>
          {selections.map((item, index) => {
            return (
              <Dropdown.Item
                eventKey={index}
                key={index}
                onClick={() => {
                  setSelecting([...selecting, item]);
                  setShowDropdown(false);
                }}
              >
                {item}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Col>
      <Col xl={8}>
        <Row>
          {/* RENDER ITEMS HERE */}
          {selected.map((item, index) => {
            return (
              <Col xl={5} key={index}>
                <Card>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {item}
                    <CloseButton
                      onClick={() => {
                        setSelecting(
                          selecting.filter((_item) => _item !== item)
                        );
                      }}
                    />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}
