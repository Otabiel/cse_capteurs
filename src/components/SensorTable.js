import useSession from '../hooks/auth'
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { isExpired, decodeToken } from "react-jwt";

const SensorTable = () => {
  const [data, setData] = useState();

  useEffect(() => {
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
      var i = 1;
      for(var key of json){
        tempArray.push(<tr><th>{i}</th><th>{key.dev_id}</th><th>{key.humi_in}</th><th>{key.humi_out}</th><th>{key.cond}</th><th>{key.nitrate}</th><th>{key.ph}</th><th>{key.phosph}</th><th>{key.potass}</th><th>{key.sel}</th><th>{key.temp_in}</th><th>{key.temp_out}</th></tr>)
        i += 1;
      }
      setData(tempArray);
    };

    fetchData()
      .catch(console.error);
  }, []);

  return (
    <div className="mb-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Device</th>
            <th>Humidity in</th>
            <th>Humidity out</th>
            <th>Conductiviy</th>
            <th>Nitrate</th>
            <th>PH</th>
            <th>Phosphore</th>
            <th>Potassium</th>
            <th>Salt</th>
            <th>Temperature in</th>
            <th>Temperature out</th>
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
