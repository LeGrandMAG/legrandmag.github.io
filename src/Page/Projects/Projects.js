import React from 'react'
import { useState } from 'react';
import { myProject } from '../../assets/projectsData';
import './Projects.css'
//import { Link } from "react-router-dom";
function ProjectElement(props){
  const [display, setDisplay] = useState(false)
  const [showDemo, setShowDemo] = useState(false)
  const [position, setPosition] = useState({top: '50%', left:'50%'})
  const [movable, setMovable] = useState(false)
    function toggleDisplay(){
      setDisplay(prev => !prev)
    }

    function toggleShowDemo(){
      setShowDemo(prev => !prev)
      let ff = document.getElementById('project-frame')
      if(showDemo){
        ff.style.display ="none"
      }
      else{
        ff.style.display ="block"
        ff.focus()
        let disp = document.getElementById("disp")
        disp.scrollBy(0,500)
      }
    }
 
    let techS = props.tech.map(item =><li key={props.tech.indexOf(item)}>{item}</li>)

    return(
            <div  className='project-element-child'>
              {display && (<div className="display-project" id="disp">
                <div className='close-project'>

                <p className='close-project-text'>Click here to close</p>
                 <button onClick={toggleDisplay} className="close-project-button">X</button>
                </div>
                <div className='project-content'>
                  <h3 className='project-tt'>{props.name}</h3>
                  <img className='project-image' src={props.illust}></img>
                  <p>{props.description}</p>
                    <p>
                    Technologies used:
                    </p>
                    <ul className='tech-list'>
                      {techS}</ul>
                      <p>{props.exp}</p>
                  {<iframe className='project-frame' id="project-frame" src={props.link} />}
                        <p onClick ={toggleShowDemo} className="projectlink center" target="_blank" href={props.link}>{showDemo ? "Hide" :" Show"} Demo</p>
                      <div className='link-container'>
                        <a className="projectlink" target="_blank" href={props.code}>Source code</a>            
                        {showDemo && <a className="projectlink" target="_blank" href={props.link}>Live version</a>}       
                      </div>
                </div>
                </div>)}
              <h5 className="project-title">{props.name}</h5>
              <p>{props.description}</p>
              <p onClick={toggleDisplay}><strong>MORE DETAILS</strong></p>
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