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
            <td>{data.general.name}</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>{data.general.DOB}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{data.general.gender}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <a href={data.general.email.email1}>
                nazmul.hossain.shishir14@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{data.general.phone}</td>
          </tr>
          <tr>
            <td>Permanent Address</td>
            <td>{data.general.address}</td>
          </tr>
          <tr>
            <td>NID</td>
            <td>{data.general.nid}</td>
          </tr>
          <tr>
            <td>Religion</td>
            <td>{data.general.religion}</td>
          </tr>
          <tr>
            <td>Blood</td>
            <td>{data.general.blood}</td>
          </tr>
        </tbody>
      </table>
      <div className="card">
        <img
          className="image img-thumbnail"
          src={process.env.PUBLIC_URL + "/General.png"}
          alt="NH Shishir"
        />
        <div className="card-body">
          ⓘ At Northern University of Business and Technology
        </div>
      </div>
    </div>
  );
}

export default General;
