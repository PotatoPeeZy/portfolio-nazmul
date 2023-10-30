import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePageTab from "./Pages/HomePageTab";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import PhotoGallery from "./Pages/PhotoGallery";
import General from "./Pages/General";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HomePageTab /> <br></br>
      </BrowserRouter>
    </div>
  );
}

export default App;
