import useSession from '../hooks/auth'
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import SensorTable from "../components/SensorTable";
import AddSensor from "../components/AddSensorModal";
import DelSensor from "../components/DelSensorModal";
import Notifs from "../components/Notifs";
import Footer from "../components/Footer";


const Sensors = () => {
  const { session, loading } = useSession();


  if (loading) return <p>Loading...</p>

  if (!session) return <p>Login Required to continue</p>

  return (
    <Layout>
      <Header/>

      <Container>
        <h1 className="mb-4 font-weight-normal line-height-1_4">{session.name}</h1>
        <h2 className="mb-4 font-weight-normal line-height-1_4">Mes Capteurs</h2>

        <SensorTable/>
        <Container className="mb-4">
          <Row>
            <AddSensor/>
          </Row>
        </Container>

        <Notifs/>

      </Container>
      <Footer/>
    </Layout>
  );
};

export default Sensors;
