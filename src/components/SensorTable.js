import useSession from '../hooks/auth'
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { isExpired, decodeToken } from "react-jwt";

const SensorTable = () => {
  const [data, setData] = useState();
  const [data_1, setData_1] = useState();
  const [data_2, setData_2] = useState();
  const [data_3, setData_3] = useState();

  const [isLoading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");

    const fetchData = async() => {
      const res = await fetch("/api/data/sensor_data", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const json = await res.json();
      const tempArray = [];
      const in_ground = [];
      const gases = [];
      const out_ground = [];
      const position = [];




      var i = 1;
      for(var key of json){
        position.push(<tr><th>{i}</th><th>{key.dev_id}</th><th>{key.longi}</th><th>{key.lati}</th></tr>);
        gases.push(<tr><th>{i}</th><th>{key.dev_id}</th><th>{key.no2}</th><th>{key.alcool}</th><th>{key.voc}</th><th>{key.co}</th></tr>);
        out_ground.push(<tr><th>{i}</th><th>{key.dev_id}</th><th>{key.humi_out}</th><th>{key.temp_out}</th></tr>);
        in_ground.push(<tr><th>{i}</th><th>{key.dev_id}</th><th>{key.humi_in}</th><th>{key.temp_in}</th><th>{key.cond}</th><th>{key.nitrate}</th><th>{key.ph}</th><th>{key.phosph}</th><th>{key.potass}</th><th>{key.sel}</th></tr>);
        i += 1;
      }

      setData(position);
      setData_1(gases);
      setData_2(out_ground);
      setData_3(in_ground);

      setLoading(false);
    };

    fetchData()
      .catch(console.error);
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No sensor registered</p>

  return (
    <div className="mb-4">
      <h3>Gases</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Device</th>
            <th>No2</th>
            <th>Alcool</th>
            <th>VOC</th>
            <th>CO</th>
          </tr>
        </thead>
        <tbody>
          {data_1}
        </tbody>
      </Table>
      <h3>In ground</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Device</th>
            <th>Humidity</th>
            <th>Temperature</th>
            <th>Conductiviy</th>
            <th>Nitrate</th>
            <th>PH</th>
            <th>Phosphore</th>
            <th>Potassium</th>
            <th>Salt</th>
          </tr>
        </thead>
        <tbody>
          {data_3}
        </tbody>
      </Table>
      <h3>Outside</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Device</th>
            <th>Humidity</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {data_2}
        </tbody>
      </Table>
      <h3>Position</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Device</th>
            <th>Longitude</th>
            <th>Lattitude</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </Table>
    </div>
  );
}
export default SensorTable;
