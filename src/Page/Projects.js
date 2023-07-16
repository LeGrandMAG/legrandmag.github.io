import React from 'react'
//import { Icon } from '@mui/material' 
//import JavascriptIcon from '@mui/icons-material/Javascript';
import { Link } from "react-router-dom";

/*function ProjectElement(){
    return(
        <div className="project-el">
            
            <h5>Project Name</h5>
            <p>Project Description</p>
            <a href="/solide">Link to Project</a>
            <div>
                <JavascriptIcon/>
            </div>
            <hr/>
        </div>
    )
} */

function Projects() {
  return (
    <div className="project-container">
               
        <a className = "lili  light" href="https://astonishing-piroshki-1236ad.netlify.app/" target="_blank">243 Studio Portfolio</a>
        <a className = "lili  light" href="https://https://magmukendi.github.io/quickymeme" target="_blank">Meme Generator</a>
        <a className = "lili  light" href="https://https://magmukendi.github.io/Tenzi-Game" target="_blank">Tenzi Game</a>
        <a className = "lili  light" href="https://https://magmukendi.github.io/wepoPriceCalculator" target="_blank">Wepo Price Calculator</a>
        <a className = "lili  light" href=" http://https://magmukendi.github.io/Tweets-Count/" target="_blank">Tweets Word Counter</a>
        <a className = "lili  light" href="https://https://magmukendi.github.io/memory-game" target="_blank">Memory Game</a>
        <a className = "lili  light" href="https://https://magmukendi.github.io/pianonotes" target="_blank">Piano Notes Player 1.0</a>

    </div>
  )
}

export default Projects