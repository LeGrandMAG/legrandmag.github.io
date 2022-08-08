import React from 'react'
import { Icon } from '@mui/material' 
import JavascriptIcon from '@mui/icons-material/Javascript';
import { Link } from "react-router-dom";

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
               
        <Link className="lili" to="/studio">Portfolio 243 Studio</Link>
        <a className = "lili" href="https://magmukendi.me/quickymeme">Meme Generator</a>
        <a className = "lili" href="https://magmukendi.me/wepoPriceCalculator">Wepo Price Calculator</a>
        <a className = "lili" href="https://magmukendi.me/pianonotes">Piano Notes Player</a>

    </div>
  )
}

export default Projects