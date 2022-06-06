import useSession from '../hooks/auth'
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Container} from "react-bootstrap";
import SensorTable from "../components/SensorTable";
import AddSensor from "../components/AddSensorModal";
import Script from "next/script";
// const prisma = new PrismaClient();


const Sensors = () => {
  const { session, loading } = useSession();

  return !session && !loading ?
  <div>Login Required</div>
  :
  <Layout>
    <Header/>

    <Container>
      <h1 className="mb-4 font-weight-normal line-height-1_4">Fdp</h1>
      <h2 className="mb-4 font-weight-normal line-height-1_4">My sensors</h2>

      <SensorTable/>
      <AddSensor/>

    </Container>

  </Layout>

};

export default Sensors;
