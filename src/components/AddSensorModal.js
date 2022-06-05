import { Table, Modal, Button, Form, Container} from "react-bootstrap";
import React, { useState, useEffect } from "react";

const AddSensor = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-4">
      <Button variant="primary" onClick={handleShow}>
        Add sensor
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add sensor form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          FORM HERE U KNOW BOIIII
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddSensor;
