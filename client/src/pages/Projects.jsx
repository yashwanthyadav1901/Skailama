import React from "react";
import CreateHeader from "../components/CreateHeader";
import vector from "./../assets/Vector.png";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="hero">
      <CreateHeader />
      <div className="projects-main">
        <div className="projects-header">
          <h1 className="main-heading">Projects</h1>
          <button className="button projects-header-button">
            <img src={vector} alt="vector" className="vector" />
            create new project
          </button>
        </div>
        <div className="projects">
          {Array.from({ length: 9 }).map((_, index) => (
            <ProjectCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
