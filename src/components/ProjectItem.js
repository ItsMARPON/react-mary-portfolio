import React from "react";

function ProjectItem({ project }) {
  return (
    <div className="list-item">
      <div className="content"></div>
      <div className="project-title">{project.title}</div>
      <a
        className="project-githubUrl"
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        {project.img}
      </a>
    </div>
  );
}

export default ProjectItem;
