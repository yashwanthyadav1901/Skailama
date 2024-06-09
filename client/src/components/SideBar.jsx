import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css"; // Import the CSS file
import logo from "./../assets/logo.png";
import settings from "./../assets/settings.png";

const SideBar = () => {
  const [selectedTitle, setSelectedTitle] = useState("");

  const Menus = [
    { title: "Projects" },
    { title: "Window Configurations" },
    { title: "Deployment" },
    { title: "Pricing" },
  ];

  const handleMenuClick = (title) => {
    setSelectedTitle(title);
  };

  return (
    <div className="sidebar sidebar-open">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <p className="logo-title">lama.</p>
      </div>
      <div className="menu-titles">
        <p>podcast upload flow</p>
        <ul>
          {Menus.map((menu, index) => (
            <Link
              to={menu.to}
              key={index}
              className="menu-item-link"
              onClick={() => handleMenuClick(menu.title)}
            >
              <li
                className={`menu-item ${
                  selectedTitle === menu.title ? "selected" : ""
                }`}
              >
                <span
                  className={`menu-icon ${
                    selectedTitle === menu.title ? "icon-selected" : ""
                  }`}
                >
                  {index + 1}
                </span>
                <span className="menu-title">{menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <hr />
        </div>
        <Link
          className="menu-item-link"
          onClick={() => {
            handleMenuClick("settings");
          }}
        >
          <li
            className={`menu-item settings ${
              selectedTitle === "settings" ? "selected" : ""
            }`}
          >
            <span
              className={`menu-icon ${
                selectedTitle === "settings" ? "icon-selected" : ""
              }`}
            >
              <img src={settings} alt="settings" className="icon-img" />
            </span>
            <span className="menu-title">Settings</span>
          </li>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
