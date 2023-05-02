import React from 'react';
import img1 from '../assets/images/brokerexchange-homepage1.png';
import img2 from '../assets/images/sevenWonders1.png';
import img3 from '../assets/images/sevenWondersHomepageResized.png';
import img4 from '../assets/images/nosql-socialnetwork-mongodbusers2.png';
import img5 from '../assets/images/nosql-socialnetwork-mongodbthoughts1.png';
import img6 from '../assets/images/cs-regex-github-gist1.png';
import img7 from '../assets/images/module12-cms1.png';
import img8 from '../assets/images/module12-cms-intro.png';
import img9 from '../assets/images/module13-Insomnia1.png';

const project = [
    {
        githubUrl: 'https://github.com/ItsMARPON/broker-exchange-prj2',
        id: 145,
        title: 'Broke(r) Exchange',
        img: {img1},
    },
    {
        githubUrl: 'https://github.com/ItsMARPON/seven-wonders-prj1',
        id: 167,
        title: 'Seven Wonders of the World for 2023',
        img: {img2, img3},
    },
    {
        githubUrl: 'https://github.com/ItsMARPON/nosql-social-network-api',
        id: 199,
        title: 'NoSQL Social Network API (Backend)',
        img: {img4, img5},
    },
    {
        githubUrl: 'https://github.com/ItsMARPON/cs-regex-tutorial',
        id: 205,
        title: 'GitHub Gist - Computer Science Regex Tutorial for Email Regex',
        img: {img6},
    },
    {
        githubUrl: 'https://github.com/ItsMARPON/cms-mysql-employee-db',
        id: 236,
        title: 'MySQL2 Content Management Systems (CMS) Employee Tracker',
        img: {img8, img7},
    },
    {
        githubUrl: 'https://github.com/ItsMARPON/orm-ecommerce-website',
        id: 257,
        title: 'Object-Relational Mapping (ORM) E-Commerce Back End',
        img: {img9},
    },
]

function Projectlist(project){
    return (
        <div className='list-item'>
            <div className='content'></div>
            <a className='list-header'
            href={project.title}
            target="_blank"
            rel='noreferrer'
            >
              {project.img}  
            </a>
            <div className='project-githubUrl'>{project.githubUrl}</div>
        </div>
    )
}

export default Projectlist;