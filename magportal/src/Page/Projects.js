import React from 'react'
import { Icon } from '@mui/material' 
import JavascriptIcon from '@mui/icons-material/Javascript';
function ProjectElement(){
    return(
        <div className="project-el">
            
            <h5>Project Name</h5>
            <p>Project Description</p>
            <a href="#">Link to Project</a>
            <div>
                <JavascriptIcon/>
            </div>
            <hr/>
        </div>
    )
}

function Projects() {
  return (
    <div className="project-container">
        <br/><p>
            Component still under construction. I will update this page very soon :)
        </p>

        
        

    </div>
  )
}

export default Projects