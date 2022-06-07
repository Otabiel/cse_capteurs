import { Table, Modal, Button, Form, Container} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { isExpired, decodeToken } from "react-jwt";
import { useForm } from "react-hook-form";

const AddSensor = () => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    try {
      var obj = {};
      obj.dev_id  = data.dev_id;
      obj.ownerId = decodeToken(localStorage.getItem("token")).sub;

      const token = localStorage.getItem("token");
      // console.log(JSON.stringify(obj));

      const res = await fetch("/api/data/sensor_data", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await res.json();

      setShow(false);

    } catch (e) {
      console.log(e);
    }
  };

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
          <form>
            <input
              {...register("dev_id", {
                required: "Veuillez entrer votre adresse mail",
              })}
              placeholder="2cf7f1203230723d"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddSensor;
