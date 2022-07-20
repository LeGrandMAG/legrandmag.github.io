import {Link} from 'react-router-dom'

/*This is the nav element of the app*/

function NavElement(props){
    return(
        <div className="navElement">
            <Link className ="anchor" to={"/"+ props.link}>
                {props.name}
            </Link>
        </div>
    )
}


/*This is the main nav bar of the app*/
function Navbar(){
    return (
        <nav>
            <ul>
                <NavElement 
                    name= "HOME"
                    link = ""
                />
                <NavElement 
                    name= "CULTURE"
                    link = "culture"
                />
                
                <NavElement 
                    name= "PROJECTS"
                    link = "projects"
                />
                
            </ul>
            <hr/>
           { /*<p id="myname">magloire mukendi</p> */}
        </nav>
    )
}







function Footer(){
    return(
        <footer className ="footer">
            <hr/>
            <div>
                <a href="https://www.instagram.com/mag.legrand/" target="_blank">
                    <span>                        
                        <i className="fa fa-instagram"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/magmukendi/" target="_blank">
                    <span>                        
                        <i className="fa fa-linkedin"></i>
                    </span>
                </a>
                <a href="https://github.com/LeGrandMAG" target="_blank">
                    <span>                        
                        <i className="fa fa-github"></i>
                    </span>
                </a>
                <a href="https://twitter.com/MAGMukendi" target="_blank">
                    <span>                        
                        <i className="fa fa-twitter"></i>
                    </span>
                </a>
                <a href="https://www.facebook.com/mag.mukendi" target="_blank">
                    <span>                        
                        <i className="fa fa-facebook"></i>
                    </span>
                </a>
            </div>
                <p >© Mag Mukendi 2022</p>
        </footer>
    )
    
}


export  {Navbar, Footer}