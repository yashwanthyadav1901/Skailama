import React from "react";
import vector from "./../assets/Vector.png";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
import settings from "./../assets/settings.png";
import notifications from "./../assets/notifications.png";
import home from "./../assets/home.png";

const CreateHeader = () => {
  return (
    <div>
      {" "}
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
      <Link className="home-button" to="/">
        <img src={home} alt="home" className="button-img" />
        <p>Back to Home</p>
      </Link>
    </div>
  );
};

export default CreateHeader;
