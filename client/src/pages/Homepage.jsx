import React, { useState } from "react";
import "./Homepage.css";
import createProject from "./../assets/createProject.png";
import vector from "./../assets/Vector.png";

import CreateHeader from "../components/CreateHeader";
import Popup from "../components/Popup";

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="hero">
      <Popup show={showPopup} onClose={togglePopup} />
      <CreateHeader />
      <div className="main">
        <h1 className="main-heading">Create a New Project</h1>
        <img src={createProject} alt="meeting" className="hero-img" />
        <p className="hero-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <button className="button" onClick={togglePopup}>
          <img src={vector} alt="vector" className="vector" />
          create new project
        </button>
      </div>
    </div>
  );
};

export default Homepage;
