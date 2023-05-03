import React from 'react';


function ProjectItem({project}){
    return(
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



export default ProjectItem;