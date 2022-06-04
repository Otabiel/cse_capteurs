import React from 'react';
import { Table } from "react-bootstrap";

const SensorTable = () => {
  return (
    <div className="mb-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Device</th>
            <th>Nitrate</th>
            <th>Phosphore</th>
            <th>Potassium</th>
            <th>CO2</th>
            <th>Temperature</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>ABCD</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
          </tr>
          <tr>
            <th>2</th>
            <th>EFGH</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
          </tr>
          <tr>
            <th>3</th>
            <th>IJKL</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
            <th>N</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default SensorTable;
