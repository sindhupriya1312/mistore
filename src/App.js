import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
