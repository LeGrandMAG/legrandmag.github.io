import React from 'react'
import { useState } from 'react';
import { myProject } from '../../assets/projectsData';
import img from "../../assets/gif/twitter.gif"
import './Projects.css'
//import { Link } from "react-router-dom";

function ProjectElement(props){
  const [display, setDisplay] = useState(false)
    console.log(props.tech)
    function toggleDisplay(){
      setDisplay(prev => !prev)
    }
    
    let techS = props.tech.map(item =><li key={props.tech.indexOf(item)}>{item}</li>)

    return(
            <div onClick={toggleDisplay} className='project-element-child'>
              {display && (<div className="display-project">
                 {/*<button onClick={toggleDisplay} className="close-project">X</button>*/}
                <div className='project-content'>
                  <h3>{props.name}</h3>
                  <img className='project-image' src={props.illust}></img>
                  <p>{props.description}</p>
                    <p>
                    Technologies used:
                    </p>
                    <ul className='tech-list'>
                      {techS}</ul>
                      <p>{props.exp}</p>
                      <div className='link-container'>
                        <a className="projectlink" target="_blank" href={props.code}>Source code</a>            
                        <a className="projectlink" target="_blank" href={props.link}>Live version</a>            
                      </div>
                </div>
                </div>)}
              <h5 className="project-title">{props.name}</h5>
              <p>{props.description}</p>
              
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
            code={project.sourceCode}
            illust={project.illustration}
            tech={project.technologies}
            exp={project.exp}
            link={project.link}/>
        )
    })
  return (
    <div className="project-container">
      <p className='click-order'>Click on a project to see more detail about it</p>
               {projectElements}
    </div>
  )
}

export default Projects