import React, { useState } from "react";
import "./HomePageTab.css";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
function HomePageTab() {
  const [tabPage, setTabPage] = useState(1);
  function makeActive(clsName) {
    setTabPage(clsName);
    console.log(clsName);
  }
  return (
    <div>
      <ul className="homepagetab nav nav-tabs">
        <li className="nav-item">
          <Link
            className={
              tabPage === 1
                ? "nav-link nav-link-tab active"
                : "nav-link nav-link-tab"
            }
            onClick={() => makeActive(1)}
          >
            General
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              tabPage === 2
                ? "nav-link nav-link-tab active"
                : "nav-link nav-link-tab"
            }
            onClick={() => makeActive(2)}
          >
            Education
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              tabPage === 3
                ? "nav-link nav-link-tab active"
                : "nav-link nav-link-tab"
            }
            onClick={() => makeActive(3)}
          >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              tabPage === 4
                ? "nav-link nav-link-tab active"
                : "nav-link nav-link-tab"
            }
            onClick={() => makeActive(4)}
          >
            Photo Gallery
          </Link>
        </li>
      </ul>
      <br />
      <HomePage page={tabPage} />
    </div>
  );
}

export default HomePageTab;
