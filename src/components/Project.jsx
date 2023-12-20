import React from "react";
import { useState } from "react";

const Project = ({ project }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        project.index % 2 === 0 ? "evenProject project" : "oddProject project"
      }
      style={{
        backgroundImage: `url("${project.image}")`,
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="projectTitle">{project.title}</div>
      <div className={open ? "open" : "closed"}>
        {open && <div className="projectInfoBox">{project.desc}</div>}
      </div>
    </div>
  );
};

export default Project;
