import React from 'react'
import { myProject } from '../assets/projectsData';
//import { Link } from "react-router-dom";

function ProjectElement(props){
    return(
            <div className='project-element-child'>

            <h5 className="project-title">{props.name}</h5>
            <p>{props.description}</p>
            <a className="projectlink" target="_blank" href={props.link}>Live version</a>            
            </div>
    )
} 

function Projects() {


    let projectElements = myProject.map(project=>{
        return(
            <ProjectElement
            key={project.id}
            name={project.title}
            description={project.description}
            link={project.link}/>
        )
    })
  return (
    <div className="project-container">
               {projectElements}
    </div>
  )
}

export default Projects