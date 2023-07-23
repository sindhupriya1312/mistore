import React from "react";
import { Link } from "react-router-dom";
import "../styles/HotAccessoriesMenu.css";

const HotAccessoriesMenu = () => {
  return (
    <div className="hotAccessoriesMenu">
      <Link className="hotAccessoriesLink" to="/music">
        Music
      </Link>
      <Link className="hotAccessoriesLink" to="/smartDevices">
        Smart Devices
      </Link>
      <Link className="hotAccessoriesLink" to="/home">
        Home
      </Link>
      <Link className="hotAccessoriesLink" to="/lifeStyle">
        Life Style
      </Link>
      <Link className="hotAccessoriesLink" to="/mobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
