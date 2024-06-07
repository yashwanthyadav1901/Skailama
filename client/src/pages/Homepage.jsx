import React from "react";
import "./Homepage.css";
import createProject from "./../assets/createProject.png";
import { IoIosAddCircle } from "react-icons/io";
import vector from "./../assets/Vector.png";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
import settings from "./../assets/Icon.png";
import notifications from "./../assets/notifications.png";
import home from "./../assets/home.png";

const Homepage = () => {
  return (
    <div className="hero">
      <Link>
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
          <p className="logo-title">lama.</p>
        </div>
      </Link>
      <div className="icons">
        <Link>
          <img src={settings} alt="settings" className="logo-img" />
        </Link>
        <Link>
          <img src={notifications} alt="notifications" className="logo-img" />
        </Link>
      </div>
      <Link className="home-button">
        <img src={home} alt="home" className="button-img" />
        <p>Back to Home</p>
      </Link>
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
        <button className="button">
          <img src={vector} alt="vector" className="vector" />
          create new project
        </button>
      </div>
    </div>
  );
};

export default Homepage;
