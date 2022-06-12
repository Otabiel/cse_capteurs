import useSession from '../hooks/auth'
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { isExpired, decodeToken } from "react-jwt";
import { Container, Button, Row, Col } from "react-bootstrap";

const SensorTable = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState();

  const onClickDis = async () => {
    try {
      const token = localStorage.getItem("token");

      const obj = {};
      obj.ownerId = decodeToken(localStorage.getItem("token")).sub;
      obj.notif = false;

      const res = await fetch("/api/data/notifs", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await res.json();

      setData(false);

    } catch (e) {
      console.log(e);
    }
  };

  const onClickEn = async () => {
    try {
      const token = localStorage.getItem("token");

      const obj = {};
      obj.notif = true;
      obj.ownerId = decodeToken(localStorage.getItem("token")).sub;

      const res = await fetch("/api/data/notifs", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await res.json();

      setData(true);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");

    const fetchData = async() => {
      const res = await fetch("/api/data/notifs", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const json = await res.json();
      console.log(json);
      setData(json.notifs);

      setLoading(false);
    };

    fetchData()
      .catch(console.error);
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h3>Les notifications sont {data ? (<span>activé</span>) : (<span>désactivé</span>)} </h3>
        </Col>
        <Col>
          {data ? (<Button variant="danger" onClick={onClickDis}>Désactiver</Button>) : (<Button variant="success" onClick={onClickEn}>Activer</Button>)}
        </Col>
      </Row>
    </Container>
  );
}
export default SensorTable;
