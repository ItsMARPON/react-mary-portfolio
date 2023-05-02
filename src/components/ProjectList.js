import React from 'react';



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
            <div className='project-url'>{project.url}</div>
        </div>
    )
}

export default Projectlist;