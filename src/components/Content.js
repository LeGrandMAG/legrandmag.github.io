import {Link} from 'react-router-dom'

import {useState} from 'react'
/*This is the nav element of the app*/

function NavElement(props){
    return(
        <div className="navElement ">
            <Link className ="anchor" to={"/"+ props.link}>
                {props.name}
            </Link>
        </div>
    )
}


/*This is the main nav bar of the app*/
function Navbar(){
    const [darkMode, setDarkMode] = useState(false)
    const [position, setPosition] = useState('start')
    const toggle = (e) =>{
        let currentMode = "light"
        let nextMode ="dark"
        let x = document.querySelectorAll("." +currentMode)
        let q = document.querySelector('.switch-container')

        if(darkMode){
            
            setDarkMode(false)
            setPosition("end")
            
        } 
        else{
            setDarkMode(true)
            currentMode ="dark"
            nextMode = "light"
            x = document.querySelectorAll("." +currentMode)
            setPosition("start")
            
        } 
        
        for(let i of x){
            i.classList.remove(currentMode)
            i.classList.add(nextMode)
        }
        //e.target.style.justifyContent = position
        q.style.justifyContent = position
        console.log(x)

        
    }
    return (
        <nav className="nav">
            {/*<div className='switch-cont'>
                <p style={{color:"#051A36"}}>Light</p>
                <div onClick={toggle} className="switch-container">
                    <div  className='switch light'></div>
                </div>
                <p style={{color:"#051A36"}}>Dark</p>
    </div> */}
            <ul>
                <NavElement 
                    name= "HOME"
                    link = ""
                />
                {/*<NavElement 
                    name= "CULTURE"
                    link = "culture"
    />
                
                <NavElement 
                    name= "PROJECTS"
                    link = "projects"
                />
                */}
                <NavElement 
                    name= "RESUME"
                    link = "resume"
                />
                
            </ul>
           { /*<p id="myname">magloire mukendi</p> */}
        </nav>
    )
}







function Footer(){
    return(
        <footer className ="footer light">
            <hr/>
            <div>
                <a href="https://www.instagram.com/mag.legrand/" target="_blank">
                <span className='light'>                       
                        <i className="fa fa-instagram"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/magmukendi/" target="_blank">
                    <span className='light'>                        
                        <i className="fa fa-linkedin"></i>
                    </span>
                </a>
                <a href="https://github.com/LeGrandMAG" target="_blank">
                <span className='light'>                       
                        <i className="fa fa-github"></i>
                    </span>
                </a>
                <a href="https://twitter.com/MAGMukendi" target="_blank">
                <span className='light'>                        
                        <i className="fa fa-twitter"></i>
                    </span>
                </a>
                <a href="https://www.facebook.com/mag.mukendi" target="_blank">
                <span className='light'>                       
                        <i className="fa fa-facebook"></i>
                    </span>
                </a>
            </div>
                <p className='light'>© Mag Mukendi 2022</p>
        </footer>
    )
    
}


export  {Navbar, Footer}