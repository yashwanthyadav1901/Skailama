import React from "react";
import "./Popup.css";
import { Link } from "react-router-dom";

const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-background">
      <div className="popup-window">
        <div className="popup-content">
          <h2>create project</h2>
          <div className="popup-input">
            <h3>enter project name:</h3>
            <input type="text" placeholder="Type here" />
          </div>

          <div className="popup-buttons">
            <Link className="close-button" onClick={onClose}>
              Cancel
            </Link>
            <Link to="/projects" className="popup-create">
              Create
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
