import useSession from '../hooks/auth'
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Script from 'next/script';
import { Table, Modal, Button, Form, Container} from "react-bootstrap";
import SensorTable from "../components/SensorTable";

const Sensors = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { session, loading } = useSession();
  return !session && !loading ?
  <div>Login Required</div>
  :
  <Layout>
    <Header/>
    <h1 className="mb-4 font-weight-normal line-height-1_4">Name</h1>
    <Container>
      <h2 className="mb-4 font-weight-normal line-height-1_4">My sensors</h2>
      <SensorTable/>

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
    </Container>

  </Layout>

};

export default Sensors;
