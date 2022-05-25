import { Modal, Button, InputGroup } from "react-bootstrap";
import { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import { useEstimate } from "../contexts/EstimateContext";

function EstimateModal({ show, hide }) {
  const materialDescriptionRef = useRef();
  const materialCostRef = useRef();
  const laborDescriptionRef = useRef();
  const laborCostRef = useRef();
  const { addLaborCost, addMaterialCost } = useEstimate();

  function handleSubmit(e) {
    e.preventDefault();
    addMaterialCost({
      description: materialDescriptionRef.current.value,
      cost: parseFloat(materialCostRef.current.value),
    });
    addLaborCost({
      description: laborDescriptionRef.current.value,
      cost: parseFloat(laborCostRef.current.value),
    });
    hide();
  }

  const [materialInputs, setMaterialInputs] = useState([
    { description: "", cost: "" },
  ]);

  console.log(materialInputs);
  const [laborInputs, setLaborInputs] = useState([
    { description: "", cost: "" },
  ]);

  const addMaterialField = () => {
    let newMaterialField = { description: "", cost: "" };

    setMaterialInputs([...materialInputs, newMaterialField]);
  };

  const addLaborField = () => {
    let newLaborField = { description: "", cost: "" };

    setLaborInputs([...laborInputs, newLaborField]);
  };

  const deleteMaterialInputs = (index) => {
    let newMaterialInputs = [...materialInputs];
    newMaterialInputs.splice(index, 1);
    setMaterialInputs(newMaterialInputs);
  };

  const deleteLaborInputs = (index) => {
    let newLaborInputs = [...laborInputs];
    newLaborInputs.splice(index, 1);
    setLaborInputs(newLaborInputs);
  };

  return (
    <Modal show={show} onHide={hide}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Estimate</Modal.Title>
        </Modal.Header>
        <Modal.Title className="ms-3 mt-2">Material Cost</Modal.Title>
        <Modal.Body>
          {materialInputs.map((input, index) => {
            return (
              <div key={index}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter a Description"
                    ref={materialDescriptionRef}
                    required
                  />
                  <Button
                    variant="outline-danger"
                    id="description"
                    onClick={() => deleteMaterialInputs(index)}
                  >
                    &times;
                  </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="cost">$</InputGroup.Text>
                  <Form.Control
                    ref={materialCostRef}
                    type="number"
                    placeholder="Enter Cost"
                    required
                  />
                </InputGroup>
              </div>
            );
          })}
          <div className="d-flex justify-content-end">
            <Button variant="outline-primary" onClick={addMaterialField}>
              Add New Item
            </Button>
          </div>
        </Modal.Body>
        <Modal.Title className="ms-3 mt-2">Labor Cost</Modal.Title>
        <Modal.Body>
          {laborInputs.map((input, index) => {
            return (
              <div key={index}>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="description"
                    type="text"
                    placeholder="Enter a Description"
                    ref={laborDescriptionRef}
                    required
                  />
                  <Button
                    variant="outline-danger"
                    id="description"
                    onClick={() => deleteLaborInputs(index)}
                  >
                    &times;
                  </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="cost">$</InputGroup.Text>
                  <Form.Control
                    name="cost"
                    type="number"
                    placeholder="Enter Cost"
                    ref={laborCostRef}
                    required
                  />
                </InputGroup>
              </div>
            );
          })}
          <div className="d-flex justify-content-end">
            <Button variant="outline-primary" onClick={addLaborField}>
              Add New Item
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Estimate
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EstimateModal;
