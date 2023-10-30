import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePageTab from "./Pages/HomePageTab";
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
