// Required for ProjectItem to work properly
import React from "react";

// This function is to use Reacts props to get to objects. It will be imported into the ProjectList.js
function ProjectItem({ project }) {
  return (
    <div className="list-item-card">
      <h2 className="project-title">{project.title}</h2>
      <div className="project-links">
        <a
          href={project.githubUrl}
          className="project-githubUrl"
          alt="project url links"
        >
          CLICK HERE
        </a>
      </div>

      <img src={project.img} alt="Project Screenshots" />
    </div>
  );
}

export default ProjectItem;
