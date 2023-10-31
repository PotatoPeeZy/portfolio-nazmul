import React from "react";
import "./General.css";
import data from "../Data/db.json";
function General() {
  return (
    <div className="general">
      <table
        className="table
         table-dark
       table-bordered 
       border-black 
       table-hover 
       table-striped-columns"
      >
        <tbody>
          <tr>
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>{data.DOB}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{data.gender}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{data.email.email1}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{data.phone}</td>
          </tr>
          <tr>
            <td>Permanent Address</td>
            <td>{data.address}</td>
          </tr>
          <tr>
            <td>NID</td>
            <td>{data.nid}</td>
          </tr>
          <tr>
            <td>Religion</td>
            <td>{data.religion}</td>
          </tr>
          <tr>
            <td>Blood</td>
            <td>{data.blood}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default General;
