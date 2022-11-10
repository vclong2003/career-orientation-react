import { CloseButton, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import {
  addDataToFirestore,
  deleteFirestoreDocument,
  getDataFromFirestore,
} from "../../../Services/Firebase";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { resultDescription as mbtiResDescriptions } from "../../../Data/mbtiData";
import { resultDescription as discResDescriptions } from "../../../Data/discData";

export default function MajorEditor() {
  //---------------------------------------initial data states
  const [listData, setListData] = useState([]);
  const [mbtiOptions, setMbtiOptions] = useState([]);
  const [discOptions, setDiscOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  //---------------------------------------processing data states
  const dataSchema = {
    name: "",
    suitableDisc: [],
    suitableMbti: [],
  };
  const [currentId, setCurrentId] = useState(null);
  const [currentData, setCurrentData] = useState(dataSchema);

  //-----------------------------------Initial data loading
  const fetchDataFromFirestore = () => {
    getDataFromFirestore("Majors").then((result) => {
      setListData(result);
    });
  };
  useEffect(() => {
    fetchDataFromFirestore();

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

  useEffect(() => {
    console.log(currentData);
  }, [currentData]);

  const handleAddMajor = async () => {
    await addDataToFirestore("Majors", currentData);
    fetchDataFromFirestore();
  };
  const handleUpdateMajor = () => {};
  const handleDeleteMajor = async (id) => {
    if (id != null) {
      await deleteFirestoreDocument("Majors", id).then(() => {
        fetchDataFromFirestore();
      });
    }
  };

  return (
    <>
      <Container>
        <Container fluid>
          <Button
            onClick={() => {
              setCurrentId(null);
              setCurrentData(dataSchema);
              setShowModal(true);
            }}
          >
            Add
          </Button>
        </Container>
        {/* ---------------------------------------Show current majors */}
        <Accordion>
          {listData.map((item, index) => {
            return (
              <Accordion.Item eventKey={item.id} key={index}>
                <Accordion.Header>{item.data.name}</Accordion.Header>
                <Accordion.Body>
                  <Container
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      overflowX: "scroll",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* RENDER ITEMS HERE */}
                    {item.data.suitableMbti.map((item, index) => {
                      return (
                        <div style={{ minWidth: "90px" }} key={index}>
                          {item}
                        </div>
                      );
                    })}
                  </Container>
                  <Container
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      overflowX: "scroll",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* RENDER ITEMS HERE */}
                    {item.data.suitableDisc.map((item, index) => {
                      return (
                        <div style={{ minWidth: "80px" }} key={index}>
                          {item}
                        </div>
                      );
                    })}
                  </Container>
                  <Container>
                    <Button
                      onClick={() => {
                        setCurrentId(item.id);
                        setShowModal(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        setLoading(true);
                        handleDeleteMajor(item.id).then(() => {
                          setLoading(false);
                        });
                      }}
                    >
                      {loading ? <Spinner animation="border" /> : "Delete"}
                    </Button>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
      {/* -----------------------------------------Modal, containing form */}
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        style={{ overflow: "hidden" }}
      >
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentData.name}
                onChange={(evt) => {
                  setCurrentData({ ...currentData, name: evt.target.value });
                }}
              />
            </Form.Group>
            {/* MBTI */}
            <Form.Group className="mb-3">
              <Form.Label>Suitable MBTI types</Form.Label>
              <PersonalityTypesEditor
                selections={mbtiOptions}
                selected={currentData.suitableMbti}
                callback={(data) => {
                  setCurrentData({ ...currentData, suitableMbti: data });
                }}
              />
            </Form.Group>
            {/* DISC */}
            <Form.Group className="mb-3">
              <Form.Label>Suitable DISC types</Form.Label>
              <PersonalityTypesEditor
                selections={discOptions}
                selected={currentData.suitableDisc}
                callback={(data) => {
                  setCurrentData({ ...currentData, suitableDisc: data });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setLoading(true);
              handleAddMajor().then(() => {
                setLoading(false);
                setShowModal(false);
              });
            }}
          >
            {loading ? <Spinner animation="border" /> : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function PersonalityTypesEditor({ selections = [], selected = [], callback }) {
  return (
    <Row>
      <Col xl={4}>
        <Dropdown autoClose="outside">
          <Dropdown.Toggle>Add</Dropdown.Toggle>

          <Dropdown.Menu>
            <Container>
              <Form.Control type="text" />
            </Container>
            <Container style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {selections.map((item, index) => {
                return (
                  <Dropdown.Item
                    eventKey={index}
                    key={index}
                    onClick={() => {
                      if (!selected.includes(item)) {
                        callback([...selected, item]);
                      }
                    }}
                  >
                    {item}
                  </Dropdown.Item>
                );
              })}
            </Container>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col
        xl={8}
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          justifyContent: "flex-start",
        }}
      >
        {/* RENDER ITEMS HERE */}
        {selected.map((item, index) => {
          return (
            <div style={{ minWidth: "90px" }} key={index}>
              {item}
              <CloseButton
                onClick={() => {
                  callback(selected.filter((_item) => _item !== item));
                }}
              />
            </div>
          );
        })}
      </Col>
    </Row>
  );
}
