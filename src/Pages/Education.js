import React from "react";
import "./Education.css";
import data from "../Data/db.json";
function Education() {
  return (
    <div className="education">
      <table
        className="ed-table table
         table-dark
        table-bordered 
        border-black 
        table-hover 
        table-striped-columns"
      >
        <thead>
          <tr>
            <th scope="col">
              <i>Education Table</i>
            </th>
            <th scope="col">Result</th>
            <th scope="col">Out Of</th>
            <th scope="col">Subject / Department</th>
            <th scope="col">Passing Year</th>
            <th scope="col">College / University</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Primary School Certificate</th>
            <td>{data.education.psc.result}</td>
            <td>{data.education.psc.outOf}</td>
            <td></td>
            <td>{data.education.psc.year}</td>
            <td>{data.education.psc.school}</td>
          </tr>
          <tr>
            <th scope="row">Junior School Certificate</th>
            <td>{data.education.jsc.result}</td>
            <td>{data.education.jsc.outOf}</td>
            <td></td>
            <td>{data.education.jsc.year}</td>
            <td>{data.education.jsc.school}</td>
          </tr>
          <tr>
            <th scope="row">Secondary School Certificate</th>
            <td>{data.education.ssc.result}</td>
            <td>{data.education.ssc.outOf}</td>
            <td>{data.education.ssc.subject}</td>
            <td>{data.education.ssc.year}</td>
            <td>{data.education.ssc.school}</td>
          </tr>
          <tr>
            <th scope="row">Higher Secondary Certificate</th>
            <td>{data.education.hsc.result}</td>
            <td>{data.education.hsc.outOf}</td>
            <td>{data.education.hsc.subject}</td>
            <td>{data.education.hsc.year}</td>
            <td>{data.education.hsc.school}</td>
          </tr>
          <tr>
            <th scope="row">Bachelor in Science</th>
            <td>{data.education.bsc.result}</td>
            <td>{data.education.bsc.outOf}</td>
            <td>{data.education.bsc.subject}</td>
            <td>{data.education.bsc.year}</td>
            <td>{data.education.bsc.school}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Education;
