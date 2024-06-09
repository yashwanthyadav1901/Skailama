import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const colors = ["#7E22CE", "#6366F1", "#F8A01D"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const randomColor = getRandomColor();

  return (
    <Link to="/projects/id">
      <div className="card">
        <div className="dp" style={{ backgroundColor: randomColor }}>
          <p>sp</p>
        </div>
        <div className="card-title">
          <div>
            <h3>sample project</h3>
            <p className="episodes">4 episodes</p>
          </div>
          <div className="edited-ago">
            <p className="grey">Last edited a week ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
