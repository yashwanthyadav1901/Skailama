import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const ProjectScreen = () => {
  const [open, setOpen] = useState(true);
  const isOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <SideBar open={open} isOpen={isOpen} />

      <Outlet />
    </div>
  );
};

export default ProjectScreen;
