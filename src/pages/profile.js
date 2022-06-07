import useSession from '../hooks/auth'
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Container} from "react-bootstrap";
import SensorTable from "../components/SensorTable";
import AddSensor from "../components/AddSensorModal";

import Footer from "../components/Footer";


const Sensors = () => {
  const { session, loading } = useSession();

  console.log(session);

  if (loading) return <p>Loading...</p>

  if (!session) return <p>Login Required to continue</p>

  return (
    <Layout>
      <Header/>

      <Container>
        <h1 className="mb-4 font-weight-normal line-height-1_4">{session.name}</h1>
        <h2 className="mb-4 font-weight-normal line-height-1_4">My sensors</h2>

        <SensorTable/>
        <AddSensor/>

      </Container>
      <Footer/>
    </Layout>
  );
};

export default Sensors;
