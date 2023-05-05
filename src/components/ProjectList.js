// Required for Projectlist to work properly
import React from "react";
import img1 from "../assets/images/brokerexchange-homepage1.png";
import img2 from "../assets/images/sevenWonders1.png";
import img4 from "../assets/images/nosql-socialnetwork-mongodbusers2.png";
import img6 from "../assets/images/cs-regex-github-gist1.png";
import img8 from "../assets/images/module12-cms-intro.png";
import img9 from "../assets/images/module13-Insomnia1.png";
import ProjectItem from "./ProjectItem";

// Creating an array of projects to be iterated through .map()
const projects = [
  {
    githubUrl: "https://github.com/ItsMARPON/broker-exchange-prj2",
    id: 145,
    title: "Broke(r) Exchange",
    img:  img1 ,
  },
  {
    githubUrl: "https://github.com/ItsMARPON/seven-wonders-prj1",
    id: 167,
    title: "Seven Wonders of the World for 2023",
    img:  img2 ,
  },
  {
    githubUrl: "https://github.com/ItsMARPON/nosql-social-network-api",
    id: 199,
    title: "NoSQL Social Network API (Backend)",
    img:  img4 ,
  },
  {
    githubUrl: "https://github.com/ItsMARPON/cs-regex-tutorial",
    id: 205,
    title: "GitHub Gist - Computer Science Regex Tutorial for Email Regex",
    img:  img6 ,
  },
  {
    githubUrl: "https://github.com/ItsMARPON/cms-mysql-employee-db",
    id: 236,
    title: "MySQL2 Content Management Systems (CMS) Employee Tracker",
    img:  img8 ,
  },
  {
    githubUrl: "https://github.com/ItsMARPON/orm-ecommerce-website",
    id: 257,
    title: "Object-Relational Mapping (ORM) E-Commerce Back End",
    img:  img9 ,
  },
];

// Use .map to iterate through projects
function Projectlist() {
  return (
    <div className="list-items">
      {projects.map((project) => <ProjectItem project={project} key={project.id}/>)}
    </div>
  );
}

export default Projectlist;
