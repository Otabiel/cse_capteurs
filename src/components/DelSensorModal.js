import { Table, Modal, Button, Form, Container} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { isExpired, decodeToken } from "react-jwt";
import { useForm } from "react-hook-form";
import { Col } from "reactstrap";

const DelSensor = () => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    try {
      var obj = {};
      obj.dev_id  = data.dev_id;
      const token = localStorage.getItem("token");

      console.log(obj);

      const res = await fetch("/api/data/remove_sensor", {
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
    <Col lg={2}>
      <div>
      <Button variant="danger" onClick={handleShow}>
        Supprimer capteur
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Formulaire de suppression de capteur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              {...register("dev_id", {
                required: "Veuillez saisir l'id du capteur",
              })}
              placeholder="2cf7f1203230723d"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handleSubmit(onSubmit)}>Supprimer</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </Col>
  );
}
export default DelSensor;
