import useSession from '../hooks/auth'
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Container} from "react-bootstrap";
import SensorTable from "../components/SensorTable";
import AddSensor from "../components/AddSensorModal";
import MapOpenLayer from "../components/OpenLayers";


const Sensors = () => {
  const { session, loading } = useSession();
  const [ data, setData ] = useState();

  const onLoad = async () => {
    const res = await fetch("/api/sensors/index", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setData(res);
    console.log(res);
  };



  return !session && !loading ?
  <div>Login Required</div>
  :
  <Layout>
    <Header/>
    <h1 className="mb-4 font-weight-normal line-height-1_4">Name</h1>
    <Container>
      <h2 className="mb-4 font-weight-normal line-height-1_4">My sensors</h2>

      <SensorTable/>
      <AddSensor/>
      <MapOpenLayer/>

    </Container>

  </Layout>

};

export default Sensors;
