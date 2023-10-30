import React from "react";
import "./HomePage.css";
import General from "./General";
import Education from "./Education";
import Skills from "./Skills";
import PhotoGallery from "./PhotoGallery";
function HomePage(props) {
  if (props.page === 1) {
    return <General />;
  }
  if (props.page === 2) {
    return <Education />;
  }
  if (props.page === 3) {
    return <Skills />;
  }
  if (props.page === 4) {
    return <PhotoGallery />;
  }
}

export default HomePage;
