import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <div className="resume-container">
      <h2 className="proficiencies">Skills</h2>
      <p>Front-end Proficiencies</p>
      <div className="frontend-list">
        <ul>HTML</ul>
        <ul>CSS</ul>
        <ul>JavaScript</ul>
        <ul>jQuery</ul>
        <ul>responsive design</ul>
        <ul>React.js</ul>
        <ul>Bootstrap</ul>
      </div>
      <p>Back-end Proficiencies</p>
      <div className="backend-list">
        <ul>APIs</ul>
        <ul>Node.js</ul>
        <ul>MongoDB, Mongoose</ul>
        <ul>MySQL, Sequelize</ul>
        <ul>REST</ul>
        <ul>GraphQL</ul>
      </div>
      <h2 className="resume-title">Professional Resume</h2>
      <FontAwesomeIcon icon={faCoffee} size="xl" />
      <a
        href="https://drive.google.com/file/d/1R46EOdKCUy_Mz_w3qG_OOKEn-nUzx00a/view?usp=sharing"
        alt="Mary Yang Resume PDF"
      >
        {" "}
        Click To View My Resume{" "}
      </a>
      <FontAwesomeIcon icon={faCoffee} size="xl" />
    </div>
  );
}

export default Resume;
