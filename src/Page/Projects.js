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
               
        <Link className="lili  light" to="/studio">Portfolio 243 Studio</Link>
        <a className = "lili  light" href="https://magmukendi.me/quickymeme">Meme Generator</a>
        <a className = "lili  light" href="https://magmukendi.me/Tenzi-Game">Tenzi Game</a>
        <a className = "lili  light" href="https://magmukendi.me/wepoPriceCalculator">Wepo Price Calculator</a>
        <a className = "lili  light" href=" http://magmukendi.me/Tweets-Count/">Tweets Word Counter</a>
        <a className = "lili  light" href="https://magmukendi.me/memory-game">Memory Game</a>
        <a className = "lili  light" href="https://magmukendi.me/pianonotes">Piano Notes Player 1.0</a>

    </div>
  )
}

export default Projects